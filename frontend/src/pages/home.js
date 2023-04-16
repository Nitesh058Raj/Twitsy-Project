import HomeTab from "@/components/HomeTab";
import Layout from "@/components/Layout";

const HomeRoute=()=>{
    return(
        <div>
            <Layout children={<HomeTab />} />
        </div>
    );
}
export default HomeRoute;
