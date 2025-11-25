import React from 'react'
import Image from 'next/image'

interface AboutProps {
  about?: string
  name?: string
  bio?: string
  photoSrc?: string
  education?: Array<{ degree: string; institution?: string}>
}

export const About: React.FC<AboutProps> = ({
  about = 'Sobre Mim',
  name = 'Paulo Henrique Aleixo de Campos',
  bio = 'Focado em criar experiências digitais eficientes. Com experiência sólida em Manutenção de computadores, celulares  e desenvolvimento web, estou sempre em busca de soluções inovadoras para desafios tecnológicos.',
  photoSrc = '/phaleixo.png',
  education = [
    { degree: 'Montagem e Manutenção de Microcomputadores', institution: 'SENAI'},
    { degree: 'Manutenção de Computadores e Celulares', institution: 'CEBRAC' },
    { degree: 'Bacharelado em T.I', institution: 'UNIVESP'},
    { degree: 'Pós-graduação em Desenvolvimento Web', institution: 'IFSUL'}
  ],
}) => {
  return (
    <section id="sobre" className="w-full bg-gray-900 py-4">
  <div className="bg-gray-900 text-white rounded-lg p-4 sm:p-10 flex flex-col md:flex-row items-start gap-8">
    
    
    {/* Uso do flex-col para empilhar (Foto + Texto) acima da Formação */}
    <div className="flex-1 flex flex-col gap-4 w-full"> 
      
      {/* Contêiner da Foto e do Texto Principal - Ficam Lado a Lado (row) */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        
        {/* Foto */}
        <div className="flex-shrink-0 w-28 h-28 rounded-full overflow-hidden bg-gray-100">
          <Image src={photoSrc} alt={`${name} — foto`} width={112} height={112} className="object-cover" />
        </div>

        {/* Texto Principal (Sobre Mim, Nome, Bio) - Fica à Direita da Foto */}
        <div className="flex-1 text-center sm:text-left">
          {/* Reduzi o tamanho das fontes para se adequar melhor */}
          <h1 className="text-xl sm:text-2xl font-semibold text-white mb-1">{about}</h1>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{name}</h3>
          <p className="text-sm sm:text-base text-white">{bio}</p>
        </div>
      </div>
      
      {/* Contêiner da Formação - Fica Abaixo da Foto/Texto Principal no fluxo normal (flex-col) */}
      <div className="mt-4 text-center sm:text-left sm:ml-34"> {/* sm:ml-34 (28 + 6) para alinhamento após a foto */}
        <h3 className="text-sm font-semibold text-white mb-2">Formação</h3>
        <ul className="text-white space-y-1 text-sm">
          {education.map((edu, idx) => (
            <li key={idx} className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium">{edu.degree}</span>
              {edu.institution && <span className="text-sm text-gray-400"> — {edu.institution}</span>}
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>
  )
}

export default About
