import {React, useEffect, useState, useRef} from 'react'
import Style from '../../styles/header/Header.module.css';
import Link from 'next/link';
import Button from '../button/Button';

export default function Header() {

    const menuData = [
        {
            id: "1",
            url: "/",
            mainMenu: "AI solutions",
            subMainMenu: 
                {
                    description: "AI solutions",
                    subMenu: [
                        {
                            menu: "Media + Entertainment",
                            // innerSubMenu: [ 
                            //     {
                            //         heading: "Media + Entertainment",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                    ]
                            //     }
                            // ]
                        },
                        {
                            menu: "Public Sector",
                            // innerSubMenu: [ 
                            //     {
                            //         heading: "Public Sector",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                //     ]
                                // }
                                
                            ]
                        },
                        {
                            menu: "Hire",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Hire",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                    ]
                            //     }
                                
                            // ]
                        },
                        {
                            menu: "Professional Services",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Professional Services",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                //     ]
                                // }
                                
                            ]
                        }
                    ]
                       
                }
        },
        {
            id: "2",
            url: "/",
            mainMenu: "AI software",
            subMainMenu: 
                {
                    description: "AI software",
                    subMenu: [
                        {
                            menu: "Media + Entertainment",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Media + Entertainment",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                //     ]
                                // }
                                
                            ]
                        },
                        {
                            menu: "Public Sector",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Public Sector",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                //     ]
                                // }
                                
                            ]
                        },
                        {
                            menu: "Hire",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Hire",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                //     ]
                                // }
                                
                            ]
                        },
                        {
                            menu: "Professional Services",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Professional Services",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                //     ]
                                // }
                                
                            ]
                        }
                    ]
                       
                }
        },
        {
            id: "3",
            url: "/",
            mainMenu: "Resources",
            subMainMenu: 
                {
                    description: "Resources",
                    subMenu: [
                        {
                            menu: "Media + Entertainment",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Media + Entertainment",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                //     ]
                                // }
                                
                            ]
                        },
                        {
                            menu: "Public Sector",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Public Sector",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                    ]
                            //     }
                                
                            // ]
                        },
                        {
                            menu: "Hire",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Hire",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                    ]
                            //     }
                                
                            // ]
                        },
                        {
                            menu: "Professional Services",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Professional Services",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                    ]
                            //     }
                                
                            // ]
                        }
                    ]   
                }
        },
        {
            id: "4",
            url: "/",
            mainMenu: "About",
            subMainMenu: 
                {
                    description: "About",
                    subMenu: [
                        {
                            menu: "Media + Entertainment",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Media + Entertainment",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                //     ]
                                // }
                                
                            ]
                        },
                        {
                            menu: "Public Sector",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Public Sector",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                    ]
                            //     }
                                
                            // ]
                        },
                        {
                            menu: "Hire",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Hire",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                    ]
                            //     }
                                
                            // ]
                        },
                        {
                            menu: "Professional Services",
                            // innerSubMenu: [ 
                            //     {
                                    heading: "Professional Services",
                                    innerDescription: "Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.",
                                    btn1: "Explore all solutions",
                                    btn1Class: "btn-black",
                                    btn2: "Content licensing",
                                    btn2Class: "transparent",
                                    subMenuDescription: "SOLUTIONS FOR",
                                    multiLink: [
                                        {
                                            link: "Broadcast"
                                        },
                                        {
                                            link: "Film + studios"
                                        },
                                        {
                                            link: "Sports"
                                        },
                                        {
                                            link: "Streaming"
                                        },
                                        {
                                            link: "Social media"
                                        },
                                        {
                                            link: "Content creators"
                                        },
                                    ]
                            //     }
                                
                            // ]
                        }
                    ]   
                }
        }
    ]

    // console.log(menuData);

  const [leftWidth, setLeftWidth] = useState('');
  const containerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [asideHeaderWidth, setAsideHeaderWidth] = useState(0);
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeSubMenu, setActiveSubMenu] = useState(0);

    useEffect(() => {
        const headerElement = document.querySelector('header .mainHeader');
        const asideHeaderElement = document.querySelector('header .mainHeader .subMenu');
        const mainSections = document.querySelector('main');
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const leftWidth = containerRect.left;
            setLeftWidth(leftWidth)
        }
   
        if (headerElement) {
            const height = headerElement.offsetHeight;
            setHeaderHeight(height);
        }

    
        if (asideHeaderElement) {
            const aWidth = asideHeaderElement.offsetWidth; // Use offsetWidth to get the width
            setAsideHeaderWidth(aWidth);
        }

        mainSections.addEventListener('click', function () {
            setActiveMenu(0)
            setActiveSubMenu(0)
        })

        window.addEventListener('resize', function () {
            setActiveMenu(0)
            setActiveSubMenu(0)
        })

    });

    const subMenuProrperty = 
        leftWidth == '' ?
           { paddingLeft: `20px`,
            top: `${headerHeight-1}px`,
            height: `calc(100vh - ${headerHeight-1}px)`}
         : {paddingLeft: `${leftWidth+20}px`,
        top: `${headerHeight-1}px`,
        height: `calc(100vh - ${headerHeight-1}px)` }

    const asideMenuProperty = {
        width: `calc(100% - ${asideHeaderWidth}px)`,
        height: `calc(100vh - ${headerHeight-19}px)`,
        top: `${headerHeight-1}px`
    }
    


  const showManu = (e, val) => {
    e.preventDefault()
    if(activeMenu === val) {
        setActiveMenu(0)
        setActiveSubMenu(0)
    } else {
        setActiveMenu(val)
        setActiveSubMenu(0)
    }
  }



 const showSubManu = (e, value) => {
    e.preventDefault()
    if(activeSubMenu === value) {
        setActiveSubMenu(0);
    } else {
        setActiveSubMenu(value);
    }
 }
  

  return (
   <header className=''>
        <div className={`${Style.mainHeader} mainHeader bg-cosmos py-[20px] fixed z-[99] top-0 left-0 w-full`}>
            <div ref={containerRef} className={`${Style.container}`} >
                <div className="row flex items-center justify-between">
                    <div className="logo relative">
                        <Link href="/" className='emptyLink'>.</Link>
                        <svg width="148" height="28" viewBox="0 0 148 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_253_803)">
                            <path d="M63.2936 0.337402C62.6548 0.337402 62.1111 0.555656 61.6825 0.988196C61.25 1.42074 61.0317 1.96042 61.0317 2.59931C61.0317 3.2382 61.25 3.74613 61.6825 4.1747C62.1111 4.60724 62.6548 4.8255 63.2936 4.8255C63.9325 4.8255 64.4405 4.60724 64.8809 4.18264C65.3294 3.7501 65.5555 3.21835 65.5555 2.60328C65.5555 1.9882 65.3294 1.41677 64.8809 0.984228C64.4365 0.555656 63.9048 0.341371 63.2936 0.341371V0.337402Z" fill="white"/>
                            <path d="M61.4443 9.02792V27.6271H65.107V7.91284L61.4443 9.02792Z" fill="white"/>
                            <path d="M35.3017 7.42456C32.4207 7.42456 29.9723 8.42059 28.0239 10.3809C26.0755 12.3412 25.0874 14.8095 25.0874 17.7103C25.0874 20.6111 26.0953 23.0833 28.0834 25.0436C30.0676 27.0039 32.5596 27.996 35.4882 27.996C37.6112 27.996 39.5199 27.4642 41.1549 26.4087C42.7898 25.3571 44.0398 23.9444 44.8692 22.2023L45.0596 21.8015L41.8771 20.4603L41.7025 20.8254C41.139 21.996 40.3096 22.9325 39.2342 23.6111C38.1588 24.2896 36.9088 24.6349 35.5239 24.6349C33.7144 24.6349 32.1668 24.0595 30.9168 22.9246C29.7779 21.8928 29.0676 20.5714 28.8096 18.996H45.4049L45.4326 18.6031C45.6668 15.4722 44.7898 12.7976 42.8295 10.6547C40.8652 8.51186 38.3334 7.42456 35.2977 7.42456H35.3017ZM39.5755 12.3492C40.6311 13.2817 41.3255 14.4484 41.6469 15.8254H28.9287C29.2858 14.4285 30.008 13.2579 31.0755 12.3333C32.266 11.3055 33.6866 10.7857 35.2977 10.7857C36.9088 10.7857 38.3969 11.3095 39.5715 12.3492" fill="white"/>
                            <path d="M75.1389 0L71.4762 1.12302V7.80159H67.2024V11.2024H71.4762V20.6389C71.4762 22.9722 72.0675 24.7381 73.2341 25.8929C74.3968 27.0437 76.1945 27.627 78.5754 27.627H80.9127V24.2262H78.5754C77.3254 24.2262 76.4286 23.9643 75.9127 23.4524C75.3968 22.9365 75.1389 22.0278 75.1389 20.754V11.2024H80.9127V7.80159H75.1389V0Z" fill="white"/>
                            <path d="M91.9247 7.42456C88.9961 7.42456 86.5041 8.41662 84.52 10.3769C82.5319 12.3373 81.5239 14.8055 81.5239 17.7103C81.5239 20.615 82.5319 23.0833 84.52 25.0436C86.5041 27.0039 88.9961 27.996 91.9247 27.996C94.8533 27.996 97.3454 27.0039 99.3295 25.0436C101.318 23.0833 102.326 20.615 102.326 17.7103C102.326 14.8055 101.318 12.3373 99.3295 10.3769C97.3454 8.41662 94.8533 7.42456 91.9247 7.42456ZM91.9247 24.5238C90.0239 24.5238 88.4763 23.8849 87.1827 22.5714C85.889 21.2539 85.262 19.6666 85.262 17.7142C85.262 15.7619 85.9088 14.1547 87.1827 12.8571C88.4723 11.5436 90.0239 10.9047 91.9247 10.9047C93.8255 10.9047 95.4049 11.5396 96.6827 12.8412C97.9446 14.1269 98.5874 15.7698 98.5874 17.7182C98.5874 19.6666 97.9485 21.3095 96.6827 22.5952C95.4049 23.8968 93.8493 24.5317 91.9247 24.5317V24.5238Z" fill="white"/>
                            <path d="M114.841 7.42456C113.103 7.42456 111.556 7.9325 110.234 8.93647C109.437 9.54361 108.774 10.2817 108.254 11.1428V7.79758H104.591V27.623H108.254V16.3611C108.254 14.7658 108.778 13.4801 109.853 12.4285C110.929 11.373 112.27 10.8611 113.944 10.8611C115.464 10.8611 116.698 11.3769 117.726 12.4365C118.758 13.5039 119.258 14.7857 119.258 16.3611V27.623H122.921V16.0238C122.921 13.5754 122.159 11.5079 120.651 9.88488C119.135 8.25393 117.183 7.42456 114.845 7.42456H114.841Z" fill="white"/>
                            <path d="M142.774 10.6586C140.81 8.51577 138.278 7.42847 135.242 7.42847C132.361 7.42847 129.913 8.4245 127.964 10.3848C126.016 12.3451 125.028 14.8134 125.028 17.7142C125.028 20.615 126.036 23.0872 128.024 25.0475C130.008 27.0078 132.5 27.9999 135.429 27.9999C137.552 27.9999 139.46 27.4681 141.095 26.4126C142.73 25.361 143.98 23.9483 144.81 22.2062L145 21.8055L141.818 20.4642L141.643 20.8293C141.079 21.9999 140.25 22.9364 139.175 23.615C138.099 24.2935 136.849 24.6388 135.464 24.6388C133.655 24.6388 132.107 24.0634 130.857 22.9285C129.718 21.8967 129.008 20.5753 128.75 18.9999H145.345L145.373 18.607C145.607 15.4761 144.73 12.8015 142.77 10.6586H142.774ZM131.016 12.3332C132.206 11.3055 133.627 10.7856 135.238 10.7856C136.849 10.7856 138.337 11.3094 139.512 12.3491C140.568 13.2816 141.262 14.4483 141.583 15.8253H128.865C129.222 14.4285 129.944 13.2578 131.012 12.3332H131.016Z" fill="white"/>
                            <path d="M147.714 26.881C147.714 27.508 147.222 28.0001 146.583 28.0001C145.944 28.0001 145.444 27.508 145.444 26.881C145.444 26.254 145.948 25.7778 146.583 25.7778C147.218 25.7778 147.714 26.2699 147.714 26.881ZM145.726 26.881C145.726 27.3731 146.091 27.762 146.587 27.762C147.083 27.762 147.428 27.3731 147.428 26.885C147.428 26.3969 147.071 25.9961 146.579 25.9961C146.087 25.9961 145.722 26.3929 145.722 26.877L145.726 26.881ZM146.409 27.4604H146.155V26.3572C146.254 26.3374 146.397 26.3255 146.579 26.3255C146.79 26.3255 146.881 26.3572 146.964 26.4048C147.024 26.4524 147.071 26.5397 147.071 26.6469C147.071 26.7699 146.976 26.8612 146.841 26.9008V26.9128C146.948 26.9524 147.008 27.0358 147.044 27.1826C147.075 27.3493 147.099 27.4167 147.123 27.4604H146.845C146.813 27.4207 146.79 27.3175 146.758 27.1905C146.738 27.0675 146.671 27.0159 146.528 27.0159H146.405V27.4604H146.409ZM146.413 26.8334H146.536C146.678 26.8334 146.794 26.7858 146.794 26.6707C146.794 26.5715 146.718 26.504 146.559 26.504C146.492 26.504 146.444 26.512 146.417 26.5159V26.8334H146.413Z" fill="white"/>
                            <path d="M21.9484 7.52783L10.9683 24.4921L13.2341 28.0001L26.4841 7.52783H21.9484Z" fill="white"/>
                            <path d="M12.9167 20.4762L4.53571 7.52783H0L8.38095 20.4762H12.9167Z" fill="white"/>
                            <path d="M58.8136 7.58333C56.9406 7.23809 55.2541 7.5238 53.8057 8.42857C52.8533 9.0238 52.0596 9.9246 51.4366 11.1151V7.81349L47.7739 8.92857V27.623H51.4366V16.3611C51.4366 14.4881 52.1231 13.0714 53.5319 12.0357C54.9525 10.9921 56.6271 10.7024 58.643 11.1508L59.1588 11.2659V7.64285L58.8096 7.57936L58.8136 7.58333Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_253_803">
                            <rect width="147.714" height="28" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <nav className='max-w-[655px] w-full pb-[5px]'>
                        <ul className='flex laptopsmall:justify-center'>
                            <li className={`mr-[72px] laptopsmall:mr-[30px]`}>
                                <Link href="#" className={`arrow text-[20px] pr-[18px] relative text-white ${Style.dropDownArrow} ${activeMenu === 1 ? `${Style.active}` : ''} `} onClick={(e) => showManu(e, 1)}>AI solutions</Link>
                                <div className={`${Style.subMenu} subMenu absolute transition-all duration-700 ease-in-out bg-cosmos h-[100vh] z-[9] pt-[69px] pr-[110px] laptopsmall:pr-[50px] overflow-auto ${activeMenu === 1 ? `left-0` : 'left-[-100%]'} `} style={leftWidth == '' ?  subMenuProrperty  :  subMenuProrperty }>
                                    <div className="innerSubMenu h-[calc(100vh-172px)] flex flex-col justify-between">
                                        <div className={`${Style.subMenuLinks} subMenuLinks pl-[10px]`}>
                                            <h3 className='text-white'>AI solutions</h3>
                                            <ul className='mt-[54px]'>
                                                <div className={`bg-ember fixed top-[100px] right-0 overflow-auto ${activeSubMenu == 0 ? 'opacity-0 invisible' : 'opacity-1 visible'} `} style={ asideMenuProperty }></div>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`} onClick={(e) => showSubManu(e, 1)}>Media + Entertainment</Link>
                                                    <div className={`${Style.innerWrap} innerWrap bg-ember fixed transition-all duration-700 ease-in-out right-0 pl-[122px] laptopsmall:pl-[50px] pt-[70px] overflow-auto ${activeSubMenu == 1 ? 'opacity-1 visible' : 'opacity-0 invisible'}`} style={ asideMenuProperty }>
                                                        <div className="inroWrap max-w-[524px]">
                                                            <h3 className='text-white'>Media + Entertainment</h3>
                                                            <p className='text-white text-[20px] max-w-[474px] mt-[14px] pl-[4px]'>Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.</p>
                                                            <div className="btnWrap mt-[22px] flex">
                                                                <Button buttonText={'Explore all solutions'} url={'/'} buttonClass={'btn-black mr-[25px]'} />
                                                                <Button buttonText={'Content licensing'} url={'/'} buttonClass={'transparent !text-[20px] mr-[30px]'} />
                                                            </div>
                                                        </div>
                                                        <div className="innerMenu mt-[135px] pl-[5px]">
                                                            <h6 className='text-[20px] text-white mb-[32px] font-[600] uppercase'>Solutions for</h6>
                                                            <ul>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Broadcast</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Film + studios</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Sports</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Streaming</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Social media</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Content creators</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`} onClick={(e) => showSubManu(e, 2)}>Public Sector</Link>
                                                    <div className={`${Style.innerWrap} innerWrap bg-ember fixed transition-all duration-700 ease-in-out right-0 pl-[122px] laptopsmall:pl-[50px] pt-[70px] overflow-auto ${activeSubMenu == 2 ? 'opacity-1 visible' : 'opacity-0 invisible'}`} style={ asideMenuProperty }>
                                                        <div className="inroWrap max-w-[524px]">
                                                            <h3 className='text-white'>Public Sector</h3>
                                                            <p className='text-white text-[20px] max-w-[474px] mt-[14px] pl-[4px]'>Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.</p>
                                                            <div className="btnWrap mt-[22px] flex">
                                                                <Button buttonText={'Explore all solutions'} url={'/'} buttonClass={'btn-black mr-[25px]'} />
                                                                <Button buttonText={'Content licensing'} url={'/'} buttonClass={'transparent !text-[20px] mr-[30px]'} />
                                                            </div>
                                                        </div>
                                                        <div className="innerMenu mt-[135px] pl-[5px]">
                                                            <h6 className='text-[20px] text-white mb-[32px] font-[600] uppercase'>Solutions for</h6>
                                                            <ul>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Broadcast</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Film + studios</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Sports</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Streaming</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Social media</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Content creators</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`} onClick={(e) => showSubManu(e, 3)}>Hire</Link>
                                                    <div className={`${Style.innerWrap} innerWrap bg-ember fixed transition-all duration-700 ease-in-out right-0 pl-[122px] laptopsmall:pl-[50px] pt-[70px] overflow-auto ${activeSubMenu == 3 ? 'opacity-1 visible' : 'opacity-0 invisible'}`} style={ asideMenuProperty }>
                                                        <div className="inroWrap max-w-[524px]">
                                                            <h3 className='text-white'>Hire</h3>
                                                            <p className='text-white text-[20px] max-w-[474px] mt-[14px] pl-[4px]'>Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.</p>
                                                            <div className="btnWrap mt-[22px] flex">
                                                                <Button buttonText={'Explore all solutions'} url={'/'} buttonClass={'btn-black mr-[25px]'} />
                                                                <Button buttonText={'Content licensing'} url={'/'} buttonClass={'transparent !text-[20px] mr-[30px]'} />
                                                            </div>
                                                        </div>
                                                        <div className="innerMenu mt-[135px] pl-[5px]">
                                                            <h6 className='text-[20px] text-white mb-[32px] font-[600] uppercase'>Solutions for</h6>
                                                            <ul>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Broadcast</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Film + studios</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Sports</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Streaming</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Social media</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Content creators</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`} onClick={(e) => showSubManu(e, 4)}>Professional Services</Link>
                                                    <div className={`${Style.innerWrap} innerWrap bg-ember fixed transition-all duration-700 ease-in-out right-0 pl-[122px] laptopsmall:pl-[50px] pt-[70px] overflow-auto ${activeSubMenu == 4 ? 'opacity-1 visible' : 'opacity-0 invisible'}`} style={ asideMenuProperty }>
                                                        <div className="inroWrap max-w-[524px]">
                                                            <h3 className='text-white'>Professional Services</h3>
                                                            <p className='text-white text-[20px] max-w-[474px] mt-[14px] pl-[4px]'>Subhead lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ligula quis pulvinar placerat um nisi, et.</p>
                                                            <div className="btnWrap mt-[22px] flex">
                                                                <Button buttonText={'Explore all solutions'} url={'/'} buttonClass={'btn-black mr-[25px]'} />
                                                                <Button buttonText={'Content licensing'} url={'/'} buttonClass={'transparent !text-[20px] mr-[30px]'} />
                                                            </div>
                                                        </div>
                                                        <div className="innerMenu mt-[135px] pl-[5px]">
                                                            <h6 className='text-[20px] text-white mb-[32px] font-[600] uppercase'>Solutions for</h6>
                                                            <ul>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Broadcast</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Film + studios</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Sports</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Streaming</Link>
                                                                </li>
                                                                <li className='mb-[32px]'>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Social media</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#" className={`text-white text-[20px] ${Style.rightArrow} relative pr-[22px]`}>Content creators</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btnWrap">
                                            <Button buttonText={'Explore all solutions'} url={'/'} buttonClass={'default smallDefaultBtn mr-[30px]'} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={`mr-[72px] laptopsmall:mr-[30px]`}>
                                <Link href="#" className={`arrow text-[20px] pr-[18px] relative text-white ${Style.dropDownArrow} ${activeMenu === 2 ? `${Style.active}` : ''} `} onClick={(e) => showManu(e, 2)}>AI software</Link>
                                <div className={`${Style.subMenu} subMenu absolute transition-all duration-700 ease-in-out bg-cosmos h-[100vh] z-[9] pt-[69px] pr-[100px] laptopsmall:pr-[50px] overflow-auto ${activeMenu === 2 ? `left-0` : 'left-[-100%]'} `} style={leftWidth == '' ?  subMenuProrperty  :  subMenuProrperty }>
                                    <div className="innerSubMenu h-[calc(100vh-172px)] flex flex-col justify-between">
                                        <div className={`${Style.subMenuLinks} subMenuLinks pl-[10px]`}>
                                            <h3 className='text-white'>AI software</h3>
                                            <ul className='mt-[54px]'>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[22px]`}>Media + Entertainment</Link>
                                                    {/* <div className={`innerWrap bg-ember fixed top-[100px] ion-700 ease-in-out right-0 h-full pl-[123px] pt-[74px] ${activeSubMenu ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>
                                                        <div className="inroWrap">
                                                            <h3 className='text-white'>Media + Entertainment</h3>
                                                            <div className="btnWrap mt-[23px]">
                                                                <Button buttonText={'Explore'} url={'/'} buttonClass={'primary mr-[30px]'} />
                                                            </div>
                                                        </div>
                                                        <div className="innerMenu mt-[90px]">
                                                            <h6 className='text-[20px] text-white mb-[32px]'>Solutions for</h6>
                                                            <ul>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Media management</Link>
                                                                </li>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Monetization</Link>
                                                                </li>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Content creation & distribution</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Recruitment</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div> */}
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Public Sector</Link>
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Hire</Link>
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Professional Services</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btnWrap">
                                            <Button buttonText={'Explore all solutions'} url={'/'} buttonClass={'default smallDefaultBtn mr-[30px]'} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={`mr-[72px] laptopsmall:mr-[30px]`}>
                                <Link href="#" className={`arrow text-[20px] pr-[18px] relative text-white ${Style.dropDownArrow} ${activeMenu === 3 ? `${Style.active}` : ''}`} onClick={(e) => showManu(e, 3)}>Resources</Link>
                                <div className={`${Style.subMenu} subMenu absolute transition-all duration-700 ease-in-out bg-cosmos h-[100vh] z-[9] pt-[69px] pr-[100px] laptopsmall:pr-[50px] overflow-auto ${activeMenu === 3 ? `left-0` : 'left-[-100%]'} `} style={leftWidth == '' ?  subMenuProrperty  :  subMenuProrperty }>
                                    <div className="innerSubMenu h-[calc(100vh-172px)] flex flex-col justify-between">
                                        <div className={`${Style.subMenuLinks} subMenuLinks pl-[10px]`}>
                                            <h3 className='text-white'>Resources</h3>
                                            <ul className='mt-[54px]'>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`} onClick={(e) => showSubManu(e)}>Media + Entertainment</Link>
                                                    {/* <div className={`innerWrap bg-ember fixed top-[100px] transition-all duration-700 ease-in-out right-0 h-full pl-[123px] pt-[74px] ${activeSubMenu ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>
                                                        <div className="inroWrap">
                                                            <h3 className='text-white'>Media + Entertainment</h3>
                                                            <div className="btnWrap mt-[23px]">
                                                                <Button buttonText={'Explore'} url={'/'} buttonClass={'primary mr-[30px]'} />
                                                            </div>
                                                        </div>
                                                        <div className="innerMenu mt-[90px]">
                                                            <h6 className='text-[20px] text-white mb-[32px]'>Solutions for</h6>
                                                            <ul>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Media management</Link>
                                                                </li>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Monetization</Link>
                                                                </li>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Content creation & distribution</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Recruitment</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div> */}
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Public Sector</Link>
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Hire</Link>
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Professional Services</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btnWrap">
                                            <Button buttonText={'Explore all solutions'} url={'/'} buttonClass={'default smallDefaultBtn mr-[30px]'} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={``}>
                                <Link href="#" className={`arrow text-[20px] pr-[18px] relative text-white ${Style.dropDownArrow} ${activeMenu === 4 ? `${Style.active}` : ''}`} onClick={(e) => showManu(e, 4)}>About</Link>
                                <div className={`${Style.subMenu} subMenu absolute transition-all duration-700 ease-in-out bg-cosmos h-[100vh] z-[9] pt-[69px] pr-[100px] laptopsmall:pr-[50px] overflow-auto ${activeMenu === 4 ? `left-0` : 'left-[-100%]'} `} style={leftWidth == '' ?  subMenuProrperty  :  subMenuProrperty }>
                                    <div className="innerSubMenu h-[calc(100vh-172px)] flex flex-col justify-between">
                                        <div className={`${Style.subMenuLinks} subMenuLinks pl-[10px]`}>
                                            <h3 className='text-white'>About</h3>
                                            <ul className='mt-[54px]'>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`} onClick={(e) => showSubManu(e)}>Media + Entertainment</Link>
                                                    {/* <div className={`innerWrap bg-ember fixed top-[100px] transition-all duration-700 ease-in-out right-0 h-full pl-[123px] pt-[74px] ${activeSubMenu ? 'opacity-1 visible' : 'opacity-0 invisible'}`}>
                                                        <div className="inroWrap">
                                                            <h3 className='text-white'>Media + Entertainment</h3>
                                                            <div className="btnWrap mt-[23px]">
                                                                <Button buttonText={'Explore'} url={'/'} buttonClass={'primary mr-[30px]'} />
                                                            </div>
                                                        </div>
                                                        <div className="innerMenu mt-[90px]">
                                                            <h6 className='text-[20px] text-white mb-[32px]'>Solutions for</h6>
                                                            <ul>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Media management</Link>
                                                                </li>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Monetization</Link>
                                                                </li>
                                                                <li className='mb-[40px]'>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Content creation & distribution</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[30px]`}>Recruitment</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div> */}
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Public Sector</Link>
                                                </li>
                                                   <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Hire</Link>
                                                </li>
                                                <li className='mb-[32px]'>
                                                    <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[22px] text-[20px]`}>Professional Services</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btnWrap">
                                            <Button buttonText={'Explore all solutions'} url={'/'} buttonClass={'default smallDefaultBtn mr-[30px]'} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="btnOuter flex items-center w-full justify-end max-w-fit">
                        <div className="searchWrap mr-[22px]">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 16L13.0834 13.0833M15.1667 8.08333C15.1667 11.9954 11.9954 15.1667 8.08333 15.1667C4.17132 15.1667 1 11.9954 1 8.08333C1 4.17132 4.17132 1 8.08333 1C11.9954 1 15.1667 4.17132 15.1667 8.08333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <Link href="#" className='text-white text-[20px]'>Sign in</Link>
                        <div className="btnWrap ml-[32px]">
                            <Button buttonText={'Get started'} url={'/'} buttonClass={'btn-white smallWhiteBtn '} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </header>
  )
}
