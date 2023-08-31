import {useRouter} from "next/router";
import {DrinkPage} from "@/pages/drink";

export default function Page() {
    const router = useRouter()
    return <DrinkPage id={router.query.id as string}/>;
}