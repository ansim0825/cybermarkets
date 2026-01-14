import { notFound } from 'next/navigation';

// Only import Cloudflare to test
import CloudflarePage from '../cloudflare';

const companyPages = {
  cloudflare: CloudflarePage,
};

export default function CompanyPage({ params }) {
  const company = params?.company?.toLowerCase();
  
  const PageComponent = companyPages[company];
  
  if (!PageComponent) {
    notFound();
  }
  
  return <PageComponent />;
}