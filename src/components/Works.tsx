'use client'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '@/styles'
import Image from 'next/image'
import { SectionWrapper } from '@/hoc'
import { projects } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import { link as linkIcon } from '../../public/assets'
import Link from 'next/link'

const ProjectCard = ({ index, name, description, tags, image, link }: any) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        className='bg-tertiary !p-5 rounded-2xl !w-full'
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <Link
            href={link}
            target='_blank'
            className='absolute top-3.5 right-3.5 !p-1 rounded-full bg-white flex items-center justify-center hover:bg-[#ffffff96] transition-all duration-200'
          >
            <Image
              src={linkIcon}
              alt='link'
              width={30}
              height={30}
              className='object-contain'
            />
          </Link>
        </div>

        <div className='!mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='!mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='!mt-4 flex flex-wrap gap-2.5'>
          {tags.map((tag: any) => (
            <div key={tag.name} className='!p-1.5 bg-white rounded-full'>
              <Image
                src={tag.icon}
                alt={tag.name}
                className='w-6 h-6 object-contain'
              />
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='!mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described. It
          reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='!mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
