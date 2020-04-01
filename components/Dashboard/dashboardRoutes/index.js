import { ViewResident } from "../viewResidents";
import React from "react";
import { useRouter } from "next/router";

export let routes = () => {
  let router = useRouter();

  return [
    {
      path: "view_residents",
      name: "View Residents",
      component: <ViewResident />,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.85716 0.666748H6.61907C7.27655 0.666748 7.80954 1.19974 7.80954 1.85722V6.61913C7.80954 7.27661 7.27655 7.8096 6.61907 7.8096H1.85716C1.19968 7.8096 0.666687 7.27661 0.666687 6.61913V1.85722C0.666687 1.19974 1.19968 0.666748 1.85716 0.666748ZM11.3809 10.1905H16.1429C16.8003 10.1905 17.3333 10.7235 17.3333 11.381V16.1429C17.3333 16.8004 16.8003 17.3334 16.1429 17.3334H11.3809C10.7235 17.3334 10.1905 16.8004 10.1905 16.1429V11.381C10.1905 10.7235 10.7235 10.1905 11.3809 10.1905ZM11.3809 0.666748H16.1429C16.8003 0.666748 17.3333 1.19974 17.3333 1.85722V6.61913C17.3333 7.27661 16.8003 7.8096 16.1429 7.8096H11.3809C10.7235 7.8096 10.1905 7.27661 10.1905 6.61913V1.85722C10.1905 1.19974 10.7235 0.666748 11.3809 0.666748ZM1.85716 10.1905H6.61907C7.27655 10.1905 7.80954 10.7235 7.80954 11.381V16.1429C7.80954 16.8004 7.27655 17.3334 6.61907 17.3334H1.85716C1.19968 17.3334 0.666687 16.8004 0.666687 16.1429V11.381C0.666687 10.7235 1.19968 10.1905 1.85716 10.1905Z"
            fill={
              router.query.role === "view_residents" ? "#009999":"#344563" 
            }
          />
        </svg>
      )
    },
    {
      path: "invite_residents",
      name: "Invite Residents",
      component: <p> hello seond 222222</p>,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9524 3.84128C14.0757 3.84128 13.3651 3.13062 13.3651 2.25397C13.3651 1.37733 14.0757 0.666672 14.9524 0.666672C15.829 0.666672 16.5397 1.37733 16.5397 2.25397C16.5397 3.13062 15.829 3.84128 14.9524 3.84128ZM7.01588 4.63496C7.01588 5.5116 7.72654 6.22226 8.60318 6.22226C9.47982 6.22226 10.1905 5.5116 10.1905 4.63496C10.1905 3.75832 9.47982 3.04766 8.60318 3.04766C7.72654 3.04766 7.01588 3.75832 7.01588 4.63496ZM2.25399 8.60317C1.37735 8.60317 0.666687 7.89251 0.666687 7.01587C0.666687 6.13922 1.37735 5.42857 2.25399 5.42857C3.13063 5.42857 3.84129 6.13922 3.84129 7.01587C3.84129 7.89251 3.13063 8.60317 2.25399 8.60317ZM9.79366 9.39685H8.20635C7.54887 9.39685 7.01588 9.92984 7.01588 10.5873V16.1429C7.01588 16.8004 7.54887 17.3334 8.20635 17.3334H9.79366C10.4511 17.3334 10.9841 16.8004 10.9841 16.1429V10.5873C10.9841 9.92984 10.4511 9.39685 9.79366 9.39685ZM3.44446 11.7778H1.85716C1.19968 11.7778 0.666687 12.3108 0.666687 12.9682V16.1428C0.666687 16.8003 1.19968 17.3333 1.85716 17.3333H3.44446C4.10195 17.3333 4.63494 16.8003 4.63494 16.1428V12.9682C4.63494 12.3108 4.10195 11.7778 3.44446 11.7778ZM16.1428 7.01586H14.5555C13.8981 7.01586 13.3651 7.54886 13.3651 8.20634V16.11C13.3651 16.7675 13.8981 17.3005 14.5555 17.3005H16.1428C16.8003 17.3005 17.3333 16.7675 17.3333 16.11V8.20634C17.3333 7.54886 16.8003 7.01586 16.1428 7.01586ZM6.2237 4.72005C6.23838 5.13769 6.36062 5.52797 6.56358 5.86402L4.59885 6.6008C4.52736 6.19411 4.35265 5.82298 4.10273 5.51541L6.2237 4.72005ZM12.9129 3.48312C12.7099 3.14706 12.5877 2.75679 12.573 2.33915L10.452 3.13451C10.7019 3.44207 10.8766 3.8132 10.9481 4.21989L12.9129 3.48312Z"
            fill={
              router.query.role === "invite_residents" ?"#009999":"#344563" 
            }
          />
        </svg>
      )
    },
    {
      path: "invite_members",
      name: "Invite Members",
      component: <p>Hello 3333333</p>,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.3213 16.7365C17.3992 17.0867 17.0867 17.3992 16.7365 17.3213L12.7609 16.4379C11.6055 17.0232 10.3245 17.333 8.99985 17.333C4.39757 17.333 0.666687 13.6021 0.666687 8.99983C0.666687 4.39756 4.39757 0.666672 8.99985 0.666672C13.6021 0.666672 17.333 4.39756 17.333 8.99983C17.333 10.3245 17.0232 11.6055 16.4379 12.7609L17.3213 16.7365Z"
            fill={
              router.query.role === "invite_members" ? "#009999":"#344563" 
            }
          />
        </svg>
      )
    },
    {
      path: "manage_members",
      name: "Manage Members",
      component: <p> hello seond 444444444444</p>,
      icon: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6364 0.337662C12.4212 0.337662 12.2468 0.512096 12.2468 0.727272V2.28571C12.2468 2.50089 12.4212 2.67532 12.6364 2.67532C12.8516 2.67532 13.026 2.50089 13.026 2.28571V0.727272C13.026 0.512096 12.8516 0.337662 12.6364 0.337662ZM4.84419 0.337662C4.62902 0.337662 4.45458 0.512096 4.45458 0.727272V2.28571C4.45458 2.50089 4.62902 2.67532 4.84419 2.67532C5.05937 2.67532 5.2338 2.50089 5.2338 2.28571V0.727272C5.2338 0.512096 5.05937 0.337662 4.84419 0.337662ZM6.01302 1.11688H11.4676V2.28571C11.4676 2.93124 11.9909 3.45455 12.6364 3.45455C13.2819 3.45455 13.8052 2.93124 13.8052 2.28571V1.11688H15.7533C16.3988 1.11688 16.9221 1.64019 16.9221 2.28571V5.01299H0.558472V2.28571C0.558472 1.64019 1.08178 1.11688 1.7273 1.11688H3.67535V2.28571C3.67535 2.93124 4.19866 3.45455 4.84419 3.45455C5.48971 3.45455 6.01302 2.93124 6.01302 2.28571V1.11688ZM16.9221 12.4156V5.7922H0.558472V12.4156C0.558472 14.3522 2.12838 15.9221 4.06497 15.9221H13.4156C15.3522 15.9221 16.9221 14.3522 16.9221 12.4156ZM5.27125 9.6467C5.43795 9.48807 5.70169 9.49461 5.86032 9.66132L7.54588 11.4327L11.0855 7.59312C11.2414 7.42393 11.505 7.41321 11.6742 7.56919C11.8434 7.72516 11.8541 7.98876 11.6982 8.15796L7.85705 12.3246C7.69381 12.5017 7.41487 12.5039 7.24885 12.3294L5.25662 10.2358C5.09799 10.0691 5.10454 9.80533 5.27125 9.6467Z"
            fill={
              router.query.role === "manage_members" ? "#009999":"#344563" 
            }
          />
        </svg>
      )
    },
    {
      path: "managae_documents",
      name: "Manage Documents",
      component: <p>Manage Component</p>,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2488 6.89959L17.3334 10.9829V3.44445C17.3334 1.91032 16.0897 0.666668 14.5556 0.666668H3.44446C1.91034 0.666668 0.666687 1.91032 0.666687 3.44445V14.1587L6.33847 8.48695C6.49923 8.32618 6.76193 8.33309 6.91403 8.50208L8.90032 10.687L12.6877 6.89965C12.8426 6.7447 13.0938 6.74467 13.2488 6.89959ZM7.80957 4.63492C7.80957 5.51156 7.09892 6.22222 6.22227 6.22222C5.34563 6.22222 4.63497 5.51156 4.63497 4.63492C4.63497 3.75827 5.34563 3.04761 6.22227 3.04761C7.09892 3.04761 7.80957 3.75827 7.80957 4.63492ZM6.22223 5.42857C5.78391 5.42857 5.42858 5.07324 5.42858 4.63491C5.42858 4.19659 5.78391 3.84126 6.22223 3.84126C6.66055 3.84126 7.01588 4.19659 7.01588 4.63491C7.01588 5.07324 6.66055 5.42857 6.22223 5.42857ZM17.3333 14.5068V12.2498L12.9349 7.80953L9.37434 11.4051L14.7065 17.3281C16.1722 17.2383 17.3333 16.0095 17.3333 14.5068ZM3.33818 17.3333H13.6302L6.5218 9.44017L0.666687 15.3528C1.02277 16.5006 2.08417 17.3333 3.33818 17.3333Z"
            fill={
              router.query.role === "managae_documents" ?"#009999":"#344563" 
            }
          />
        </svg>
      )
    },
    {
      path: "send_communication",
      name: "Send Communication",
      component: <p> communication</p>,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2488 6.89959L17.3334 10.9829V3.44445C17.3334 1.91032 16.0897 0.666668 14.5556 0.666668H3.44446C1.91034 0.666668 0.666687 1.91032 0.666687 3.44445V14.1587L6.33847 8.48695C6.49923 8.32618 6.76193 8.33309 6.91403 8.50208L8.90032 10.687L12.6877 6.89965C12.8426 6.7447 13.0938 6.74467 13.2488 6.89959ZM7.80957 4.63492C7.80957 5.51156 7.09892 6.22222 6.22227 6.22222C5.34563 6.22222 4.63497 5.51156 4.63497 4.63492C4.63497 3.75827 5.34563 3.04761 6.22227 3.04761C7.09892 3.04761 7.80957 3.75827 7.80957 4.63492ZM6.22223 5.42857C5.78391 5.42857 5.42858 5.07324 5.42858 4.63491C5.42858 4.19659 5.78391 3.84126 6.22223 3.84126C6.66055 3.84126 7.01588 4.19659 7.01588 4.63491C7.01588 5.07324 6.66055 5.42857 6.22223 5.42857ZM17.3333 14.5068V12.2498L12.9349 7.80953L9.37434 11.4051L14.7065 17.3281C16.1722 17.2383 17.3333 16.0095 17.3333 14.5068ZM3.33818 17.3333H13.6302L6.5218 9.44017L0.666687 15.3528C1.02277 16.5006 2.08417 17.3333 3.33818 17.3333Z"
            fill={
              router.query.role === "send_communication" ?"#009999":"#344563" 
            }
          />
        </svg>
      )
    }
  ];
};
