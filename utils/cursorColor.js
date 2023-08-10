// Create a function that sets the cursor color based on the page

export function getCursorColor(pathname) {
	switch (pathname) {
		case "/projects/rivet":
			return "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800";
		case "/projects/agrify":
			return "bg-gradient-to-r from-green-500 to-green-700";
		case "/projects/gidicruise":
			return "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500";
		case "/projects/floatplane":
			return "bg-gradient-to-r from-sky-400 to-blue-500";
		case "/projects/ltt-labs":
			return "bg-gradient-to-r from-orange-600 to-pink-700";
		case "/projects/ml-percussion":
			return "bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500";
		default:
			return "bg-gradient-to-r from-green-600 via-blue-600 to-purple-600";
	}
}

export function getCursorHoverColor(pathname) {
	switch (pathname) {
		case "/projects/rivet":
			return "bg-gradient-to-r from-purple-700 via-violet-800 to-purple-700";
		case "/projects/agrify":
			return "bg-gradient-to-r from-green-400 to-green-600";
		case "/projects/gidicruise":
			return "bg-gradient-to-r from-rose-300 via-fuchsia-400 to-indigo-400";
		case "/projects/floatplane":
			return "bg-gradient-to-r from-sky-600 to-blue-700";
		case "/projects/ltt-labs":
			return "bg-gradient-to-r from-orange-700 to-rose-700";
		case "/projects/ml-percussion":
			return "bg-gradient-to-r from-red-600 via-yellow-800 to-yellow-500";
		default:
			return "bg-gradient-to-r from-green-500 via-blue-800 to-purple-800";
	}
}
