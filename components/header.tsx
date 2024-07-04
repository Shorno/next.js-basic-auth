import {Navbar, NavbarBrand, NavbarContent} from "@nextui-org/navbar";
import Link from "next/link";
import {Input} from "@nextui-org/input";
import React from "react";
import HeaderAuth from "@/components/header-auth";


export default function Header() {


    return (
        <>


            <Navbar className={"shadow mb-6"}>
                <NavbarBrand>
                    <Link href={"/"} className={"font-bold"}>Discuss</Link>
                </NavbarBrand>
                <NavbarContent justify={"center"}>
                    <Input/>
                </NavbarContent>
                <NavbarContent justify={"end"}>
                    <HeaderAuth/>
                </NavbarContent>
            </Navbar>
        </>
    )
}
