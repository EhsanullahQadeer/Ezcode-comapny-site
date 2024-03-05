import React from "react";

export const AboutBadge = ({ text1, text2, isMiddle }) => {
  console.log("isMiddle", typeof isMiddle);
  return (
    <>
      <svg width="110" height="140" viewBox="0 0 110 140">
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_21934"
              data-name="Rectangle 21934"
              width="110"
              height="140"
              transform="translate(239 142)"
              fill="#fff"
            />
          </clipPath>
          <filter
            id="Path_16991"
            x="1.595"
            y="-2.229"
            width="106.734"
            height="146.352"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="2" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood flood-color="#8c83f7" flood-opacity="0.302" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="1" stop-color="#eef5ff" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#eab62b" />
            <stop offset="1" stop-color="#ff8008" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#8980f7" />
            <stop offset="1" stop-color="#4136c1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-4"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#ffd200" />
            <stop offset="1" stop-color="#f7971e" />
          </linearGradient>

          <linearGradient
            id="linear-gradient-5"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#001869" />
            <stop offset="1" stop-color="#3284f9" />
          </linearGradient>
          <filter
            id="Path_16993"
            x="-4.043"
            y="59.26"
            width="118.03"
            height="45.31"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-2" />
            <feFlood flood-color="#8923e0" flood-opacity="0.149" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_16994"
            x="30.304"
            y="-3.342"
            width="50.734"
            height="55.305"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="blur-3" />
            <feFlood flood-color="#2352e0" flood-opacity="0.149" />
            <feComposite operator="in" in2="blur-3" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g
          id="Badges-2-en"
          transform="translate(-239 -142)"
          clip-path="url(#clip-path)"
        >
          <g
            id="Badges_2"
            data-name="Badges 2"
            transform="translate(243.957 144.658)"
          >
            <path
              id="Path_16989"
              data-name="Path 16989"
              d="M2627.929-4204.687,2621-4199.36v-10.556Z"
              transform="translate(-2527.887 4294.546)"
              fill={isMiddle ? "url(#linear-gradient-5)" : "#d07011"}
            />
            <path
              id="Path_16990"
              data-name="Path 16990"
              d="M2621-4204.687l6.929,5.327v-10.556Z"
              transform="translate(-2621 4294.545)"
              fill={isMiddle ? "url(#linear-gradient-5)" : "#d07011"}
            />
            <g
              transform="matrix(1, 0, 0, 1, -4.96, -2.66)"
              filter="url(#Path_16991)"
            >
              <path
                id="Path_16991-2"
                data-name="Path 16991"
                d="M41.191,121.537,0,95.467V3.313A3.011,3.011,0,0,1,3.011.3L44.381-5,84.723.3a3.011,3.011,0,0,1,3.011,3.011V95.465L46.541,121.537a5.052,5.052,0,0,1-2.67.811,5.139,5.139,0,0,1-2.68-.811Z"
                transform="translate(11.09 10.27)"
                fill={isMiddle ? "url(#linear-gradient-4)" : "#fff"}
                stroke="#cfe1fd"
                stroke-width="1"
              />
            </g>
            <path
              id="Path_16992"
              data-name="Path 16992"
              d="M40.048,112.828,2.335,88.954H2.316V2.258A1.846,1.846,0,0,1,4.162.413L43.245-5,80.81.413a1.846,1.846,0,0,1,1.853,1.846V88.936l.017.019L44.956,112.829a4.632,4.632,0,0,1-2.445.739,4.708,4.708,0,0,1-2.457-.739Z"
              transform="translate(7.699 10.855)"
              fill="url(#linear-gradient)"
            />
            <g
              transform="matrix(1, 0, 0, 1, -4.96, -2.66)"
              filter="url(#Path_16993)"
            >
              <path
                id="Path_16993-2"
                data-name="Path 16993"
                d="M1.2,0h97.62a1.194,1.194,0,0,1,1.205,1.187V27.31H0V1.187A1.194,1.194,0,0,1,1.2,0Z"
                transform="translate(4.96 65.26)"
                fill={`url(#linear-gradient-${isMiddle ? "3" : "2"})`}
              />
            </g>

            <g
              transform="matrix(1, 0, 0, 1, -4.96, -2.66)"
              filter="url(#Path_16994)"
            >
              <path
                id="Path_16994-2"
                data-name="Path 16994"
                d="M15.327,34.09,0,24.847l.079-.06V.326A1.205,1.205,0,0,1,1.284-.88L16.306-3,31.529-.88A1.205,1.205,0,0,1,32.734.326V24.891h-.163l-15.253,9.2a2.445,2.445,0,0,1-.994.215A2.47,2.47,0,0,1,15.327,34.09Z"
                transform="translate(39.3 5.66)"
                fill={`url(#linear-gradient-${isMiddle ? "3" : "2"})`}
              />
            </g>

            <text
              transform={`translate(${text1.translateX} 71.86)`}
              fill="#fff"
              font-size="8"
              font-family="Arial-BoldMT, Arial"
              font-weight="700"
            >
              <tspan x="0" y="0">
                {text1.text}
              </tspan>
            </text>

            <text
              transform={`translate(${text2.translateX} 83.86)`}
              fill="#fff"
              font-size="11"
              font-family="Arial-BoldMT, Arial"
              font-weight="700"
            >
              <tspan x="0" y="0">
                {text2.text}
              </tspan>
            </text>

            {!isMiddle && (
              <>
                <path
                  id="Path_17004"
                  data-name="Path 17004"
                  d="M5.645,2.877,6.2,4.223l1.458.105a.593.593,0,0,1,.515.4.579.579,0,0,1-.183.621l-1.113.933.347,1.408A.579.579,0,0,1,7,8.315a.6.6,0,0,1-.666.024L5.1,7.579l-1.241.75A.6.6,0,0,1,3.2,8.307a.587.587,0,0,1-.232-.621l.347-1.408L2.2,5.352A.579.579,0,0,1,2,4.724a.587.587,0,0,1,.543-.4L4,4.224l.552-1.341a.591.591,0,0,1,1.087,0Z"
                  transform="translate(4.929 70.773)"
                  fill="#f5fafe"
                />
                <path
                  id="Path_17005"
                  data-name="Path 17005"
                  d="M5.645,2.877,6.2,4.223l1.458.105a.593.593,0,0,1,.515.4.579.579,0,0,1-.183.621l-1.113.933.347,1.408A.579.579,0,0,1,7,8.315a.6.6,0,0,1-.666.024L5.1,7.579l-1.241.75A.6.6,0,0,1,3.2,8.307a.587.587,0,0,1-.232-.621l.347-1.408L2.2,5.352A.579.579,0,0,1,2,4.724a.587.587,0,0,1,.543-.4L4,4.224l.552-1.341a.591.591,0,0,1,1.087,0Z"
                  transform="translate(85.287 70.773)"
                  fill="#f5fafe"
                />
              </>
            )}
            {isMiddle ? (
              <g id="SF-logo-vector" transform="translate(41.813 7.215)">
                <path
                  id="Rectangle"
                  d="M8.305,0h2.271a.207.207,0,0,1,.207.207V.248a.422.422,0,0,1-.114.287L3.479,8.3a.422.422,0,0,0,0,.568L9.1,14.987a.422.422,0,0,1,0,.568l-.908,1.008a.422.422,0,0,1-.6.032l-.028-.027L.472,8.875a.422.422,0,0,1,0-.568L7.994.136A.422.422,0,0,1,8.305,0Z"
                  transform="translate(-0.362 0)"
                  fill="#fff"
                />
                <path
                  id="Rectangle-2"
                  data-name="Rectangle"
                  d="M7.957,0h2.257a.21.21,0,0,1,.2.21V.258a.422.422,0,0,1-.114.283L3.121,8.547a.422.422,0,0,0,0,.568l5.626,6.279a.422.422,0,0,1,0,.568l-.908,1.022a.422.422,0,0,1-.63,0L.11,9.112a.422.422,0,0,1,0-.568L7.642.141A.422.422,0,0,1,7.957,0Z"
                  transform="translate(18.719 18.179) rotate(180)"
                  fill="#fff"
                />
                <path
                  id="Oval"
                  d="M18.822,18.878c1.57,0,2.809-1.734,2.662-3.588-.066-.824-.576-2.3-.748-2.044-.085.129.114,1.143.045,1.762-.106,1.03-.5,1.658-.706,1.291a5.921,5.921,0,0,1-.183-1.853,9.3,9.3,0,0,0-.366-2.157c-.076-.227-.787-2.114-1.3-2.293h-.062a.187.187,0,0,0-.092.041,4.5,4.5,0,0,1-.413,1.538,18.053,18.053,0,0,0-1.206,1.865A5.281,5.281,0,0,0,16,15.689C16.093,17.721,17.249,18.878,18.822,18.878Z"
                  transform="translate(-9.39 -5.772)"
                  fill="#fff"
                />
              </g>
            ) : (
              <g
                id="Group_78952"
                data-name="Group 78952"
                transform="translate(38.723 9.132)"
              >
                <path
                  id="Path_14580"
                  data-name="Path 14580"
                  d="M289.891,155.547l-6.411-6.411a.528.528,0,0,0-.761,0l-1.262,1.262,5.148,5.148a.528.528,0,0,1,0,.761l-5.3,5.3,1.262,1.262a.528.528,0,0,0,.761,0h0l6.568-6.553a.545.545,0,0,0,0-.775Z"
                  transform="translate(-266.074 -148.974)"
                  fill="#fff"
                />
                <path
                  id="Path_14581"
                  data-name="Path 14581"
                  d="M266.81,169.1a.528.528,0,0,1,0,.761L264,172.688l1.635,1.635,4.459-4.459a.528.528,0,0,0,0-.761l-4.3-4.3-1.635,1.635Z"
                  transform="translate(-251.254 -162.532)"
                  fill="#bad620"
                />
                <path
                  id="Path_14582"
                  data-name="Path 14582"
                  d="M180.281,155.791l4.459-4.459-1.635-1.635-.463-.463a.528.528,0,0,0-.761,0l-6.553,6.553a.528.528,0,0,0,0,.761h0l6.411,6.41a.528.528,0,0,0,.761,0h0l.463-.463,1.635-1.635-4.3-4.3a.533.533,0,0,1-.016-.777Z"
                  transform="translate(-175.166 -149.061)"
                  fill="rgba(255,255,255,0.45)"
                />
                <path
                  id="Path_14583"
                  data-name="Path 14583"
                  d="M244.676,184.923l1.82,1.806,1.969-1.969a.528.528,0,0,0,0-.761l-1.806-1.807-1.969,1.969A.579.579,0,0,0,244.676,184.923Z"
                  transform="translate(-234.583 -177.435)"
                  fill="#bad620"
                />
                <path
                  id="Path_14584"
                  data-name="Path 14584"
                  d="M266.81,169.1a.528.528,0,0,1,0,.761L264,172.688l1.635,1.635,4.459-4.459a.528.528,0,0,0,0-.761l-4.3-4.3-1.635,1.635Z"
                  transform="translate(-251.254 -162.532)"
                  fill="#fff"
                />
                <path
                  id="Path_14585"
                  data-name="Path 14585"
                  d="M244.676,184.923l1.82,1.806,1.969-1.969a.528.528,0,0,0,0-.761l-1.806-1.807-1.969,1.969A.579.579,0,0,0,244.676,184.923Z"
                  transform="translate(-234.583 -177.435)"
                  fill="#fff"
                />
                <path
                  id="Path_14586"
                  data-name="Path 14586"
                  d="M250.281,149.7l-.463-.463a.528.528,0,0,0-.761,0l-1.262,1.262.846.847,1.635,1.635,1.635-1.635Z"
                  transform="translate(-237.378 -149.06)"
                  fill="rgba(255,255,255,0.75)"
                />
                <path
                  id="Path_14587"
                  data-name="Path 14587"
                  d="M249.181,219.8l-1.635,1.635-.846.847,1.262,1.262a.528.528,0,0,0,.761,0h0l.463-.463,1.635-1.635Z"
                  transform="translate(-236.435 -209.642)"
                  fill="rgba(255,255,255,0.75)"
                />
                <path
                  id="Path_14588"
                  data-name="Path 14588"
                  d="M214.812,169.343l1.969-1.969-1.635-1.635-.847-.846-4.459,4.459a.528.528,0,0,0,0,.761h0l4.3,4.3.847-.847,1.635-1.635-1.806-1.806a.563.563,0,0,1,0-.789Z"
                  transform="translate(-204.719 -162.616)"
                  fill="rgba(255,255,255,0.75)"
                />
              </g>
            )}

            
            <path
              id="Path_16997"
              data-name="Path 16997"
              d="M5.068,2.821l.466,1.135,1.226.089a.5.5,0,0,1,.434.341.484.484,0,0,1-.154.522L6.1,5.694l.3,1.184a.488.488,0,0,1-.185.522.5.5,0,0,1-.56.02L4.6,6.778l-1.049.631A.5.5,0,0,1,3,7.391a.494.494,0,0,1-.191-.522L3.1,5.683,2.165,4.9A.486.486,0,0,1,2,4.377a.494.494,0,0,1,.454-.341l1.226-.084.466-1.129a.5.5,0,0,1,.915,0Z"
              transform="translate(45.963 111.241)"
              fill="url(#linear-gradient-2)"
            />
            <path
              id="Path_16998"
              data-name="Path 16998"
              d="M5.068,2.821l.466,1.135,1.226.089a.5.5,0,0,1,.434.341.484.484,0,0,1-.154.522L6.1,5.694l.3,1.184a.488.488,0,0,1-.185.522.5.5,0,0,1-.56.02L4.6,6.778l-1.049.631A.5.5,0,0,1,3,7.391a.494.494,0,0,1-.191-.522L3.1,5.683,2.165,4.9A.486.486,0,0,1,2,4.377a.494.494,0,0,1,.454-.341l1.226-.084.466-1.129a.5.5,0,0,1,.915,0Z"
              transform="translate(52.859 107.873)"
              fill="url(#linear-gradient-2)"
            />
            <path
              id="Path_16999"
              data-name="Path 16999"
              d="M5.068,2.821l.466,1.135,1.226.089a.5.5,0,0,1,.434.341.484.484,0,0,1-.154.522L6.1,5.694l.3,1.184a.488.488,0,0,1-.185.522.5.5,0,0,1-.56.02L4.6,6.778l-1.049.631A.5.5,0,0,1,3,7.391a.494.494,0,0,1-.191-.522L3.1,5.683,2.165,4.9A.486.486,0,0,1,2,4.377a.494.494,0,0,1,.454-.341l1.226-.084.466-1.129a.5.5,0,0,1,.915,0Z"
              transform="translate(39.065 107.873)"
              fill="url(#linear-gradient-2)"
            />
            <path
              id="Path_17000"
              data-name="Path 17000"
              d="M5.068,2.821l.466,1.135,1.226.089a.5.5,0,0,1,.434.341.484.484,0,0,1-.154.522L6.1,5.694l.3,1.184a.488.488,0,0,1-.185.522.5.5,0,0,1-.56.02L4.6,6.778l-1.049.631A.5.5,0,0,1,3,7.391a.494.494,0,0,1-.191-.522L3.1,5.683,2.165,4.9A.486.486,0,0,1,2,4.377a.494.494,0,0,1,.454-.341l1.226-.084.466-1.129a.5.5,0,0,1,.915,0Z"
              transform="translate(32.169 104.133)"
              fill="url(#linear-gradient-2)"
            />
            <path
              id="Path_17001"
              data-name="Path 17001"
              d="M5.068,2.821l.466,1.135,1.226.089a.5.5,0,0,1,.434.341.484.484,0,0,1-.154.522L6.1,5.694l.3,1.184a.488.488,0,0,1-.185.522.5.5,0,0,1-.56.02L4.6,6.778l-1.049.631A.5.5,0,0,1,3,7.391a.494.494,0,0,1-.191-.522L3.1,5.683,2.165,4.9A.486.486,0,0,1,2,4.377a.494.494,0,0,1,.454-.341l1.226-.084.466-1.129a.5.5,0,0,1,.915,0Z"
              transform="translate(59.759 104.133)"
              fill="url(#linear-gradient-2)"
            />

          </g>
        </g>
      </svg>
    </>
  );
};
