import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center selection:bg-purple-500 selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <svg
                                    className="h-16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                >
                                    <defs>
                                        <linearGradient
                                            id="a"
                                            x1="9"
                                            y1="-7205.66"
                                            x2="9"
                                            y2="-7219.44"
                                            gradientTransform="matrix(1 0 0 -1 0 -7206.55)"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset=".13"
                                                stop-color="#773adc"
                                            />
                                            <stop
                                                offset=".23"
                                                stop-color="#8249e2"
                                            />
                                            <stop
                                                offset=".43"
                                                stop-color="#9664ec"
                                            />
                                            <stop
                                                offset=".6"
                                                stop-color="#a274f2"
                                            />
                                            <stop
                                                offset=".74"
                                                stop-color="#a67af4"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M14.45 8.8H3.68v4.85c0 1.26 2.41 2.29 5.44 2.29s5.44-1 5.44-2.29z"
                                        fill="#773adc"
                                    />
                                    <path
                                        d="M8.39 2.16l-8 4.09a.71.71 0 00-.25.94.62.62 0 00.25.28l8 3.48a.93.93 0 00.73 0l8.48-3.5a.72.72 0 00.28-.94.63.63 0 00-.28-.3L9.14 2.14a.86.86 0 00-.75.02z"
                                        fill="url(#a)"
                                    />
                                    <path
                                        d="M15.84 10.2a1.26 1.26 0 00-.23-.52 5.19 5.19 0 00-2.52-2.23L9.61 6l-1.11.79L12 8.28a5.05 5.05 0 012.72 2.66 7.88 7.88 0 01.28 1.68m.16 0l.42-.83.53.68h.1a5 5 0 00-.38-2.27z"
                                        fill="#50e6ff"
                                    />
                                    <ellipse
                                        cx="8.94"
                                        cy="6.46"
                                        rx="1.34"
                                        ry=".68"
                                        fill="#552f99"
                                    />
                                </svg>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="mb-6 space-y-4 text-black">
                                <h1 className="text-3xl font-bold">
                                    Welcome to <span className="text-purple-700">StudentSync</span>
                                </h1>
                                <p className="text-lg">
                                    StudentSync is a web application that allows
                                    schools to manage their student information.
                                </p>
                                <p className="text-md text-purple-700">
                                    Laravel ,Inertia , React, Tailwind CSS,
                                    SQLite
                                </p>
                                <div className="space-x-2 flex">
                                    <p className="text-xs">Made by</p>
                                    <a
                                        target="_blank"
                                        href="https://github.com/R-antDev"
                                        className="underline text-xs"
                                    >
                                        R-antDev
                                    </a>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
