import { notFound } from "next/navigation";
import { services } from "../../../lib/services";
import { EmployerOfRecordPage } from "../../../components/EmployerOfRecordPage";
import { GlobalPayrollSolutionsPage } from "../../../components/GlobalPayrollSolutionsPage";
import { ImmigrationAndCompliancePage } from "../../../components/ImmigrationAndCompliancePage";
import { LegalizationAndAttestationSupportPage } from "../../../components/LegalizationAndAttestationSupportPage";
import { RelocationAndDestinationServicesPage } from "../../../components/RelocationAndDestinationServicesPage";
import { RecruitmentAndContractorsPage } from "../../../components/RecruitmentAndContractorsPage";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  if (service.slug === "global-payroll-solutions") {
    return <GlobalPayrollSolutionsPage />;
  }

  if (service.slug === "employer-of-record") {
    return <EmployerOfRecordPage />;
  }

  if (service.slug === "recruitment-and-contractors") {
    return <RecruitmentAndContractorsPage />;
  }

  if (service.slug === "immigration-and-compliance") {
    return <ImmigrationAndCompliancePage />;
  }

  if (service.slug === "relocation-and-destination-services") {
    return <RelocationAndDestinationServicesPage />;
  }

  if (service.slug === "legalization-and-attestation-support") {
    return <LegalizationAndAttestationSupportPage />;
  }

  return <main className="flex flex-col" />;
}

