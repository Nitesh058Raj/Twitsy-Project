import Layout from "@/components/Layout";
import MyTweetsTab from "@/components/MyTweetsTab";

const MyTweetsRoute=()=>{
    return(
        <div>
          <Layout children={<MyTweetsTab />} />
        </div>
    );
}
export default MyTweetsRoute;
