import { notFound } from 'next/navigation';
import { use } from 'react';

// Import all company pages directly
import AbnormalPage from '../abnormal';
import BarracudaPage from '../barracuda';
import CheckpointPage from '../checkpoint';
import CiscoPage from '../cisco';
import CloudflarePage from '../cloudflare';
import DarktracePage from '../darktrace';
import FortinetPage from '../fortinet';
import IronscalesPage from '../ironscales';
import Knowbe4Page from '../knowbe4';
import MaterialsecurityPage from '../materialsecurity';
import MicrosoftPage from '../microsoft';
import MimecastPage from '../mimecast';
import ProofpointPage from '../proofpoint';
import SophosPage from '../sophos';
import TrendmicroPage from '../trendmicro';

const companyPages = {
  abnormal: AbnormalPage,
  barracuda: BarracudaPage,
  checkpoint: CheckpointPage,
  cisco: CiscoPage,
  cloudflare: CloudflarePage,
  darktrace: DarktracePage,
  fortinet: FortinetPage,
  ironscales: IronscalesPage,
  knowbe4: Knowbe4Page,
  materialsecurity: MaterialsecurityPage,
  microsoft: MicrosoftPage,
  mimecast: MimecastPage,
  proofpoint: ProofpointPage,
  sophos: SophosPage,
  trendmicro: TrendmicroPage,
};

export default function CompanyPage({ params }) {
  const { company } = use(params);
  
  const PageComponent = companyPages[company?.toLowerCase()];
  
  if (!PageComponent) {
    notFound();
  }
  
  return <PageComponent />;