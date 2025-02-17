import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Image from "next/image";
import { Card } from "@/components/ui/3d-pin";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <div>
      <main>
        <BackgroundBeamsWithCollision className="h-dvh">
          <div className="w-full flex flex-col gap-9 lg:gap-11 xl:gap-14 max-xl:relative py-10">
            <div className="w-full">
              <div className="relative w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] aspect-square mx-auto">
                <Image
                  fill
                  alt="Logo of Liyana Group"
                  src={"/assets/logo/liyana_group.png"}
                />
              </div>
              <div className="-z-10 absolute top-10 xl:top-1/2 xl:-translate-y-1/2 w-full">
                <div className="w-full aspect-auto">
                  <Image
                    src={`/assets/world_map.svg`}
                    className="h-full w-full pointer-events-none select-none"
                    alt="World map"
                    height="495"
                    width="1056"
                    draggable={false}
                  />
                  <svg
                    viewBox="0 0 800 400"
                    className="w-full h-full absolute inset-0 pointer-events-none select-none"
                  >
                    <g>
                      <path
                        d="M 67.79177777777781 57.33155555555555 Q 102.51400000000001 7.331555555555553 137.2362222222222 124.32844444444446"
                        fill="none"
                        stroke="url(#path-gradient)"
                        strokeWidth="1"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M 67.79177777777781 57.33155555555555 Q 180.6826666666667 7.331555555555553 293.5735555555556 235.10555555555555"
                        fill="none"
                        stroke="url(#path-gradient)"
                        strokeWidth="1"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M 293.5735555555556 235.10555555555555 Q 336.63200000000006 63.95044444444446 379.6904444444445 113.95044444444446"
                        fill="none"
                        stroke="url(#path-gradient)"
                        strokeWidth="1"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M 399.716 85.53911111111113 Q 485.6457777777778 35.539111111111126 571.5755555555556 136.41355555555555"
                        fill="none"
                        stroke="url(#path-gradient)"
                        strokeWidth="1"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M 571.5755555555556 136.41355555555555 Q 632.3558888888889 54.14844444444445 693.1362222222222 104.14844444444445"
                        fill="none"
                        stroke="url(#path-gradient)"
                        strokeWidth="1"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M 571.5755555555556 136.41355555555555 Q 526.701 86.41355555555555 481.82644444444446 202.87133333333335"
                        fill="none"
                        stroke="url(#path-gradient)"
                        strokeWidth="1"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="path-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                        <stop
                          offset="5%"
                          stopColor="#0ea5e9"
                          stopOpacity="1"
                        ></stop>
                        <stop
                          offset="95%"
                          stopColor="#0ea5e9"
                          stopOpacity="1"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="white"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <g>
                      <g>
                        <circle
                          cx="67.79177777777781"
                          cy="57.33155555555555"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="67.79177777777781"
                          cy="57.33155555555555"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                      <g>
                        <circle
                          cx="137.2362222222222"
                          cy="124.32844444444446"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="137.2362222222222"
                          cy="124.32844444444446"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g>
                      <g>
                        <circle
                          cx="67.79177777777781"
                          cy="57.33155555555555"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="67.79177777777781"
                          cy="57.33155555555555"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                      <g>
                        <circle
                          cx="293.5735555555556"
                          cy="235.10555555555555"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="293.5735555555556"
                          cy="235.10555555555555"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g>
                      <g>
                        <circle
                          cx="293.5735555555556"
                          cy="235.10555555555555"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="293.5735555555556"
                          cy="235.10555555555555"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                      <g>
                        <circle
                          cx="379.6904444444445"
                          cy="113.95044444444446"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="379.6904444444445"
                          cy="113.95044444444446"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g>
                      <g>
                        <circle
                          cx="399.716"
                          cy="85.53911111111113"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="399.716"
                          cy="85.53911111111113"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                      <g>
                        <circle
                          cx="571.5755555555556"
                          cy="136.41355555555555"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="571.5755555555556"
                          cy="136.41355555555555"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g>
                      <g>
                        <circle
                          cx="571.5755555555556"
                          cy="136.41355555555555"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="571.5755555555556"
                          cy="136.41355555555555"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                      <g>
                        <circle
                          cx="693.1362222222222"
                          cy="104.14844444444445"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="693.1362222222222"
                          cy="104.14844444444445"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g>
                      <g>
                        <circle
                          cx="571.5755555555556"
                          cy="136.41355555555555"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="571.5755555555556"
                          cy="136.41355555555555"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                      <g>
                        <circle
                          cx="481.82644444444446"
                          cy="202.87133333333335"
                          r="2"
                          fill="#0ea5e9"
                        ></circle>
                        <circle
                          cx="481.82644444444446"
                          cy="202.87133333333335"
                          r="2"
                          fill="#0ea5e9"
                          opacity="0.5"
                        >
                          <animate
                            attributeName="r"
                            from="2"
                            to="8"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="opacity"
                            from="0.5"
                            to="0"
                            dur="1.5s"
                            begin="0s"
                            repeatCount="indefinite"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <TypingAnimation className="text-center text-2xl xl:text-4xl 2xl:text-5xl min-h-[160px] xxsm:min-h-[128px] xsm:min-h-[96px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r px-4 from-blue-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              Full Freight Management, Advanced Logistics Solutions & Trading.
            </TypingAnimation>
          </div>
        </BackgroundBeamsWithCollision>

        <div className="w-full h-fit my-10">
          <div className="flex flex-col place-items-center overflow-hidden">
            <h1 className="text-3xl md:text-7xl lg:text-9xl font-bold text-center text-black relative z-20">
              Our Companies
            </h1>
            <div className="w-full h-40 relative">
              {/* Gradients */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.7}
                maxSize={1.5}
                particleDensity={1500}
                className="w-full h-full absolute"
                particleColor="#3b82f6"
              />
              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(576px_100px_at_top,transparent_20%,white)] xl:[mask-image:radial-gradient(1024px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          <div className="h-fit w-full p-20 relative -translate-y-20 flex flex-wrap justify-center gap-24 lg:gap-32 xl:gap-56">
            <Card title="Warid Logistics" href="https://waridlogistics.co.uk/">
              <div className="w-72 lg:w-80 p-4 flex flex-col gap-4 tracking-tight text-slate-100/50">
                <div className="w-full aspect-square relative">
                  <Image
                    fill
                    alt="Warid Logistics Logo"
                    src={"/assets/logo/warid_logistics.png"}
                  />
                </div>

                <h3 className="text-center max-w-xs !pb-2 !m-0 font-bold  text-2xl lg:text-3xl text-slate-700">
                  Warid Logistics
                </h3>
              </div>
            </Card>

            <Card
              title="Liyana Logistics Bangladesh"
              href="https://bd.liyanalogistics.com"
            >
              <div className="w-72 lg:w-80 p-4 flex flex-col gap-4 tracking-tight text-slate-100/50">
                <div className="w-full aspect-square relative">
                  <Image
                    fill
                    alt="Liyana Logistics Bangladesh Logo"
                    src={"/assets/logo/liyana_logistics_bd.png"}
                  />
                </div>

                <h3 className="text-center max-w-xs !pb-2 !m-0 font-bold  text-2xl lg:text-3xl text-slate-700">
                  Liyana Logistics Bangladesh
                </h3>
              </div>
            </Card>

            <Card
              title="Liyana Logistics India"
              href="https://liyanaindia.com/"
            >
              <div className="w-72 lg:w-80 p-4 flex flex-col gap-4 tracking-tight text-slate-100/50">
                <div className="w-full aspect-square relative">
                  <Image
                    fill
                    alt="Liyana Logistics India logo"
                    src={"/assets/logo/liyana_logistics_in.png"}
                  />
                </div>

                <h3 className="text-center max-w-xs !pb-2 !m-0 font-bold  text-2xl lg:text-3xl text-slate-700">
                  Liyana Logistics India
                </h3>
              </div>
            </Card>

            <Card
              title="Liyana Logistics Pakistan"
              href="https://pk.liyanalogistics.com"
            >
              <div className="w-72 lg:w-80 p-4 flex flex-col gap-4 tracking-tight text-slate-100/50">
                <div className="w-full aspect-square relative">
                  <Image
                    fill
                    alt="Liyana Logistics Pakistan Logo"
                    src={"/assets/logo/liyana_logistics_pk.png"}
                  />
                </div>

                <h3 className="text-center max-w-xs !pb-2 !m-0 font-bold  text-2xl lg:text-3xl text-slate-700">
                  Liyana Logistics Pakistan
                </h3>
              </div>
            </Card>

            <Card
              title="Liyana Logistics United States"
              href="https://us.liyanalogistics.com"
            >
              <div className="w-72 lg:w-80 p-4 flex flex-col gap-4 tracking-tight text-slate-100/50">
                <div className="w-full aspect-square relative">
                  <Image
                    fill
                    alt="Liyana Logistics United States Logo"
                    src={"/assets/logo/liyana_logistics_us.png"}
                  />
                </div>

                <h3 className="text-center max-w-xs !pb-2 !m-0 font-bold  text-2xl lg:text-3xl text-slate-700">
                  Liyana Logistics United States
                </h3>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <footer className="text-center p-4">
        <p>
          &copy; Liyana Group {new Date().getFullYear()}. All rights reserved. |
          <Link
            className="ms-[1ch] text-[#3b82f6]"
            href={"https://github.com/Tasfiq-Jawaad"}
            target="_blank"
          >
            Contact the developer
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
