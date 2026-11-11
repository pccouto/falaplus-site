// Series "Suplementos e medicação" (05-11-2026): vitamins, supplements, medicines and other
// substances that families associate with speech, autism and ADHD. Evidence-first, no
// promises; approvals are named by jurisdiction (EMA / FDA) because they differ by country.
// Content files: ./conteudo/<lang>/<slug>.mjs (EN/ES files carry id = PT slug).
const live = true
const guide = { pt: 'Guia', en: 'Guide', es: 'Guía' }
const myth = { pt: 'Mito ou verdade', en: 'Myth or fact', es: '¿Mito o verdad?' }
const a = (id, kind, pt, en, es) => ({ id, theme: 'saude', kind, pt: { live, ...pt }, en: { live, ...en }, es: { live, ...es } })

export default [
  a('melatonina-criancas-autismo-sono', guide,
    { slug: 'melatonina-criancas-autismo-sono', title: 'Melatonina em crianças: o que se sabe no autismo e na PHDA', teaser: 'Pode ajudar a adormecer em casos selecionados, sempre depois das rotinas de sono e com o médico.' },
    { slug: 'melatonin-for-children-autism-sleep', title: 'Melatonin for children: what we know in autism and ADHD', teaser: 'It can help some children fall asleep, after sleep routines and with a doctor.' },
    { slug: 'melatonina-ninos-autismo-sueno', title: 'Melatonina en niños: qué se sabe en el autismo y el TDAH', teaser: 'Puede ayudar a dormir en casos seleccionados, después de las rutinas de sueño y con el médico.' }),
  a('omega-3-autismo-phda-linguagem', myth,
    { slug: 'omega-3-autismo-phda-linguagem', title: 'Ómega-3 no autismo e na PHDA: ajuda a fala?', teaser: 'As revisões Cochrane não encontram benefício claro. O que isso significa para a criança.' },
    { slug: 'omega-3-autism-adhd-speech', title: 'Omega-3 for autism and ADHD: does it help speech?', teaser: 'Cochrane reviews find no clear benefit. What that means for the child.' },
    { slug: 'omega-3-autismo-tdah-lenguaje', title: 'Omega-3 en el autismo y el TDAH: ¿ayuda al lenguaje?', teaser: 'Las revisiones Cochrane no encuentran un beneficio claro. Qué significa para el niño.' }),
  a('medicacao-autismo-risperidona-aripiprazol', guide,
    { slug: 'medicacao-autismo-risperidona-aripiprazol', title: 'Medicação no autismo: risperidona, aripiprazol e a fala', teaser: 'Há medicamentos para a irritabilidade grave, não para o autismo nem para a linguagem.' },
    { slug: 'autism-medication-risperidone-aripiprazole', title: 'Autism medication: risperidone, aripiprazole and speech', teaser: 'Some medicines treat severe irritability, not autism itself or language.' },
    { slug: 'medicacion-autismo-risperidona-aripiprazol', title: 'Medicación en el autismo: risperidona, aripiprazol y el habla', teaser: 'Hay medicamentos para la irritabilidad grave, no para el autismo ni para el lenguaje.' }),
  a('medicacao-phda-metilfenidato-linguagem', guide,
    { slug: 'medicacao-phda-metilfenidato-linguagem', title: 'Medicação para a PHDA e a linguagem: o que muda e o que não muda', teaser: 'O metilfenidato atua na atenção; as dificuldades de linguagem precisam do seu próprio apoio.' },
    { slug: 'adhd-medication-methylphenidate-language', title: 'ADHD medication and language: what changes and what does not', teaser: 'Methylphenidate targets attention; language difficulties need their own support.' },
    { slug: 'medicacion-tdah-metilfenidato-lenguaje', title: 'Medicación para el TDAH y el lenguaje: qué cambia y qué no', teaser: 'El metilfenidato actúa sobre la atención; las dificultades de lenguaje necesitan su propio apoyo.' }),
  a('ferro-anemia-desenvolvimento-infantil', guide,
    { slug: 'ferro-anemia-desenvolvimento-infantil', title: 'Falta de ferro na criança: anemia, desenvolvimento e suplementos', teaser: 'A carência de ferro no bebé está associada a atrasos do desenvolvimento. Porque o suplemento é só com análises.' },
    { slug: 'iron-deficiency-child-development', title: 'Iron deficiency in children: anaemia, development and supplements', teaser: 'Iron deficiency in infancy is linked to developmental delays. Why supplements need blood tests first.' },
    { slug: 'deficit-hierro-desarrollo-infantil', title: 'Falta de hierro en el niño: anemia, desarrollo y suplementos', teaser: 'El déficit de hierro en el bebé se asocia a retrasos del desarrollo. Por qué el suplemento va con análisis.' }),
  a('gravidez-acido-folico-iodo-valproato', guide,
    { slug: 'gravidez-acido-folico-iodo-valproato', title: 'Gravidez e desenvolvimento da linguagem: ácido fólico, iodo e valproato', teaser: 'O que se sabe sobre suplementos e medicamentos na gravidez e o neurodesenvolvimento da criança.' },
    { slug: 'pregnancy-folic-acid-iodine-valproate', title: 'Pregnancy and language development: folic acid, iodine and valproate', teaser: 'What is known about supplements and medicines in pregnancy and child neurodevelopment.' },
    { slug: 'embarazo-acido-folico-yodo-valproato', title: 'Embarazo y desarrollo del lenguaje: ácido fólico, yodo y valproato', teaser: 'Qué se sabe sobre suplementos y medicamentos en el embarazo y el neurodesarrollo del niño.' }),
  a('tratamentos-perigosos-autismo-mms-quelacao', myth,
    { slug: 'tratamentos-perigosos-autismo-mms-quelacao', title: 'MMS, quelação e outros «tratamentos» perigosos para o autismo', teaser: 'Produtos que prometem «curar» o autismo ou «desbloquear» a fala e os riscos documentados.' },
    { slug: 'dangerous-autism-treatments-mms-chelation', title: 'MMS, chelation and other dangerous autism «treatments»', teaser: 'Products that promise to «cure» autism or «unlock» speech, and their documented risks.' },
    { slug: 'tratamientos-peligrosos-autismo-mms-quelacion', title: 'MMS, quelación y otros «tratamientos» peligrosos para el autismo', teaser: 'Productos que prometen «curar» el autismo o «desbloquear» el habla y sus riesgos documentados.' }),
  a('canabidiol-cbd-autismo', myth,
    { slug: 'canabidiol-cbd-autismo', title: 'Canabidiol (CBD) no autismo: o que dizem os estudos', teaser: 'Investigação inicial, produtos com rótulos pouco fiáveis e nenhuma aprovação para o autismo.' },
    { slug: 'cbd-cannabidiol-autism', title: 'Cannabidiol (CBD) for autism: what studies say', teaser: 'Early research, unreliable labels and no approval for autism.' },
    { slug: 'cannabidiol-cbd-autismo', title: 'Cannabidiol (CBD) en el autismo: qué dicen los estudios', teaser: 'Investigación inicial, etiquetas poco fiables y ninguna aprobación para el autismo.' }),
]
