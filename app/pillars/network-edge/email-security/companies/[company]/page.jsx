"use client";

import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// Dynamic imports for each company page
const companyPages = {
  abnormal: dynamic(() => import('../abnormal')),
  barracuda: dynamic(() => import('../barracuda')),
  checkpoint: dynamic(() => import('../checkpoint')),
  cisco: dynamic(() => import('../cisco')),
  cloudflare: dynamic(() => import('../cloudflare')),
  darktrace: dynamic(() => import('../darktrace')),
  fortinet: dynamic(() => import('../fortinet')),
  ironscales: dynamic(() => import('../ironscales')),
  knowbe4: dynamic(() => import('../knowbe4')),
  materialsecurity: dynamic(() => import('../materialsecurity')),
  microsoft: dynamic(() => import('../microsoft')),
  mimecast: dynamic(() => import('../mimecast')),
  proofpoint: dynamic(() => import('../proofpoint')),
  sophos: dynamic(() => import('../sophos')),
  trendmicro: dynamic(() => import('../trendmicro')),
};

export default function CompanyPage({ params }) {
  const { company } = params;
  
  const PageComponent = companyPages[company?.toLowerCase()];
  
  if (!PageComponent) {
    notFound();
  }
  
  return <PageComponent />;
}
