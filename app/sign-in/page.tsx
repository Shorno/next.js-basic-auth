import {signIn, signOut} from "@/actions";
import {Button} from "@nextui-org/button";
import {auth} from "@/auth";
import {Card, CardBody, CardHeader,} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Divider} from "@nextui-org/divider";

export default async function SignInPage() {
    const session = await auth();
    console.log(session)


    return (
        <>
            <div className={"flex flex-col items-center justify-center pt-24 max-w-3xl mx-auto gap-5"}>
                <Card>
                    <CardHeader>
                        <Image
                            src={session?.user?.image || undefined}
                            alt={"GitHub Profile Picture"}
                            width={30}
                        />

                        <h1 className={"text-lg ml-2"}>{session?.user?.name}</h1>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p>{session?.user?.email}</p>
                        <p>{session?.user?.id}</p>
                    </CardBody>
                </Card>

                <form action={signIn}>
                    <Button size={"sm"} color={"primary"} type={"submit"}>Sign In</Button>
                </form>

                <form action={signOut}>
                    <Button size={"sm"} color={"danger"} type={"submit"}>Sign Out</Button>
                </form>
            </div>
        </>
    )
}
