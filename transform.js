const datos=[
    {
        id: 1,
        nomnbre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1'},
            { id: 2, nombre: 'Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3'},
            { id: 4, nombre: 'Proyecto 4'}
        ]
    },
    {
        id: 3,
        nomnbre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5'},
            { id: 6, nombre: 'Proyecto 6'}
        ]
    }
];
const desarrolladoresJavascript=datos.filter(dato=>(dato.habilidades
                                     .includes('JavaScript')
    ))
        console.log(desarrolladoresJavascript)

const nombresProyectos=datos.map(dato=>(dato.proyectos
                            .map(proyecto => proyecto.nombre))).flat();
        console.log(nombresProyectos);

  
  
  
  
  