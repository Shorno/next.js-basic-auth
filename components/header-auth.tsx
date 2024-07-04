"use client"
import {NavbarItem} from "@nextui-org/navbar";
import {Avatar} from "@nextui-org/avatar";
import React from "react";
import {Button} from "@nextui-org/button";
import {signIn, signOut} from "@/actions";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Divider} from "@nextui-org/divider";
import {useSession} from "next-auth/react";


export default function HeaderAuth() {
    const session = useSession();

    let authContent;
    if (session.status === "loading") {
        authContent = <NavbarItem>Loading...</NavbarItem>
    } else if (session.data?.user) {

        authContent = <Popover placement={"left"}>
            <PopoverTrigger>
                <Avatar src={session.data.user.image || undefined}/>
            </PopoverTrigger>
            <PopoverContent>
                <div className={"p-4"}>
                    <h1 className={"text-lg pb-2"}>{session.data.user.name}</h1>
                    <p className={"mb-5"}>{session.data.user?.email}</p>
                    <Divider/>
                    <form action={signOut} className={"mt-5 flex justify-center"}>
                        <Button type={"submit"} size={"sm"} color={"danger"} variant={"bordered"}>Sign Out</Button>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
    } else {
        authContent = <>
            <NavbarItem>
                <form action={signIn}>
                    <Button type={"submit"} color={"secondary"} variant={"bordered"}>Sign In</Button>
                </form>

            </NavbarItem>
            <NavbarItem>
                <form action={signIn}>
                    <Button type={"submit"} color={"primary"} variant={"flat"}>Sign Up</Button>
                </form>

            </NavbarItem>
        </>
    }
    return authContent;

}




