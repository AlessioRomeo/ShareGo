import React from 'react';
import styles from '../../styles/SideMenu.module.scss'
import {BiSearch} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import {AiFillHome} from "react-icons/ai";
import {MdOutlineExplore} from "react-icons/md";
import {TbCalendarTime} from "react-icons/tb";
import {IoIosSettings} from "react-icons/io";

function SideMenu(props) {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>SHARE<span>GO</span></h1>
            </div>
            <div className={styles.inputContainer}>
                <BiSearch className={styles.searchIcon}/>
                <input className={styles.input} placeholder={"Search..."} type="text"/>
            </div>
            <div className={styles.menuItemsContainer}>
                <Link className={styles.menuLink} href={"/"}>
                    <div className={styles.iconMenuContainer}>
                        <Image className={styles.profileImage} src={"/profileSignIn.png"} width={40} height={40} alt={"Profile Picture"}/>
                    </div>
                    <h1>Profile</h1>
                </Link>
                <Link className={styles.menuLink} href={"/"}>
                    <div className={styles.iconMenuContainer}>
                        <AiFillHome className={styles.icon}/>
                    </div>
                    <h1>Home</h1>
                </Link>
                <Link className={styles.menuLink} href={"/"}>
                    <div className={styles.iconMenuContainer}>
                        <MdOutlineExplore className={styles.icon}/>
                    </div>
                    <h1>Explore</h1>
                </Link>
                <Link className={styles.menuLink} href={"/"}>
                    <div className={styles.iconMenuContainer}>
                        <TbCalendarTime className={styles.icon}/>
                    </div>
                    <h1>Activity</h1>
                </Link>
            </div>
            <div className={styles.menuItemsContainerBottom}>
                <Link className={styles.menuLink} href={"/"}>
                    <div className={styles.iconMenuContainer}>
                        <IoIosSettings className={styles.icon}/>
                    </div>
                    <h1>Settings</h1>
                </Link>
            </div>
        </div>
    );
}

export default SideMenu;