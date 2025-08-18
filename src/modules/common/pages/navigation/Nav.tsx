import { TabFolder } from "@/components/ui/tabFolder/tabFolder";
import { ResumeClient } from "../client-record/ResumeClient";
import { ResumeConcursal } from "../concursal-record/ResumeConcursal";
import { ResumeJudicial } from "../judicial-record/ResumeJudicial";
import { Title } from "@/components/ui/text/Title";


const Nav = () => {
  const tabs = ['Ficha del Cliente', 'Ficha Concursal', 'Ficha Judicial'];
  
  return (
 
    <TabFolder tabs={tabs}>
      <ResumeClient />
      <ResumeConcursal/>
      <ResumeJudicial/>
    </TabFolder>
  );
};

export const Component = Nav;