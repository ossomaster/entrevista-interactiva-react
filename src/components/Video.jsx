import classNames from "classnames";
import React, { useRef, useMemo, useEffect, useContext } from "react";
import ReactPlayer from "react-player/file";
import AppContext from "../contexts/AppContext";
import { getFullPath } from "../helpers";
import useDynamicState from "../hooks/useDynamicState";
import VideoControls from "./VideoControls";
import VideoOptions from "./VideoOptions";
import VideoProgress from "./VideoProgress";

const parseStringTimeInSeconds = (stringTime) => {
	const splitTime = stringTime.split(":");
	const minutes = (parseInt(splitTime[0] ?? "") || 0) * 60;
	const seconds = parseInt(splitTime[1] ?? "") || 0;
	return minutes + seconds;
};

const BACKWARD_SECONDS = 10;

const Video = () => {
	const playerRef = useRef();

	const {
		state: { video, answer, db_videos },
		setAnswer,
		changeVideo,
		finish,
	} = useContext(AppContext);

	const [player, updatePlayer] = useDynamicState({
		show: false,
		playing: true,
		duration: 0,
		played: 0,
	});

	const { playing, duration, played, show } = player;

	const { src, endTime, askStartTime, loopStartTime, loopEndTime, options } = useMemo(() => {
		return {
			endTime: video?.endTime ? parseStringTimeInSeconds(video?.endTime) : duration,
			askStartTime: parseStringTimeInSeconds(video.askStartTime),
			loopStartTime: parseStringTimeInSeconds(video.loopStartTime),
			loopEndTime: parseStringTimeInSeconds(video.loopEndTime),
			options: (video?.options || []).map((videoId) => db_videos[videoId]),
			src: getFullPath(`/videos/${video.id}.mp4`),
		};
	}, [video, duration]);

	const showOptions = useMemo(() => {
		if (!options.length) return false;
		return played >= askStartTime;
	}, [played, askStartTime]);

	const videoClasses = classNames("absolute top-0 left-0 transition-opacity duration-1000 h-full w-full", {
		"opacity-100": show,
		"opacity-0": !show,
	});

	const handleOnDuration = (duration) => {
		updatePlayer({ duration: Math.ceil(duration) });
	};

	const handleOnProgress = (e) => {
		updatePlayer({
			played: Math.floor(e.playedSeconds),
		});
	};

	const handleOnEnded = () => {
		if (!video?.options) {
			finish();
			return;
		}

		if (!answer) {
			playerRef.current.seekTo(loopStartTime);
			return;
		}

		changeVideo(answer.id);
	};

	const handleOnTogglePlay = () => {
		updatePlayer({ playing: !playing });
	};

	const handleOnBackward = () => {
		const subtractSeconds = played - BACKWARD_SECONDS;
		const calcSeconds = subtractSeconds < 0 ? 0 : subtractSeconds;
		playerRef.current.seekTo(calcSeconds);

		updatePlayer({
			played: calcSeconds,
		});
	};

	const handleOnSkip = () => {
		playerRef.current.seekTo(parseStringTimeInSeconds(video.askStartTime) - 2);
	};

	const handleOnReady = () => {
		updatePlayer({
			show: true,
		});
	};

	useEffect(() => {
		if (!answer) {
			if (loopEndTime && played >= loopEndTime) {
				playerRef.current.seekTo(loopStartTime);
			}
		}

		if (endTime && played >= endTime) {
			handleOnEnded();
		}
	}, [played]);

	useEffect(() => {
		updatePlayer({
			show: false,
			duration: 0,
			played: 0,
		});
	}, [video]);

	return (
		<>
			<div className={videoClasses}>
				<ReactPlayer
					ref={playerRef}
					url={src}
					width='100%'
					height='100%'
					playing={playing}
					onDuration={handleOnDuration}
					onProgress={handleOnProgress}
					onEnded={handleOnEnded}
					volume={1}
					onReady={handleOnReady}
				/>
			</div>
			<VideoProgress played={played} duration={endTime}></VideoProgress>
			<VideoControls
				playing={playing}
				showSkip={!!options.length}
				onTogglePlay={handleOnTogglePlay}
				onBackward={handleOnBackward}
				onSkip={handleOnSkip}
			/>
			<VideoOptions show={showOptions} options={options} answer={answer} onAnswer={setAnswer}></VideoOptions>
		</>
	);
};

export default Video;
