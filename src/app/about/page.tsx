
const AboutHero = dynamic(() => import('@/components/AboutSection'));
import EducationShowcaseList from '@/components/education/education-showcase-list'
import { EDUCATION } from '@/data/education'
import { EXPERIENCE } from '@/data/experience';
import dynamic from 'next/dynamic';

const page = () => {
  return (
    <>
      <AboutHero/>
      <EducationShowcaseList title='Experience' details={EXPERIENCE} /> 
      <EducationShowcaseList title='Education' details={EDUCATION} />
    </>
  )
}

export default page