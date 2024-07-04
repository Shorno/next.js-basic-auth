import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import Link from "next/link";
import {Input} from "@nextui-org/input";
import {auth} from "@/auth";
import {Avatar} from "@nextui-org/avatar";
import React from "react";
import {Button} from "@nextui-org/button";

export default async function Header() {
    const session = await auth();

    let authContent;
    if (session?.user) {
        authContent = <Avatar src={session.user.image || undefined}/>
    } else {
        authContent = <>
            <NavbarItem>
                <Button type={"submit"} color={"secondary"} variant={"bordered"}>Sign In</Button>
            </NavbarItem>
            <NavbarItem>
                <Button type={"submit"} color={"primary"} variant={"flat"}>Sign Up</Button>
            </NavbarItem>
        </>
    }

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
                    {authContent}
                </NavbarContent>
            </Navbar>
        </>
    )
}
