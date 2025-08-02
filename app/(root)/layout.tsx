// import { redirect } from "next/navigation";
// import { getUserSession } from "../(auth)/actions";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    //const response = await getUserSession();
    //(response?.user){
//redirect("/home");
    //}

    return (
        <main className="container">
            {children}
        </main>
    )
}