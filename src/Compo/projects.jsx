const Project = () => {
    return(
        <div id="project">
            <div id="h1-btn"> 
            <h1>My Projects</h1>
            <a href="https://github.com/Hashim-28" target="_blank" rel="noopener noreferrer">
                    <button><img src="/pics/github.png" alt="git" /> Visit My GitHub</button>
                </a>
            </div>
            <div id="box1">
                <div id="gym">
                    <img src="/pics/gym.png" alt="gym" />
                    <h2>Gym Managment</h2>
                    <p>Efficient Gym Management System for scheduling, member management, and payment tracking, streamlining operations and enhancing user experience.</p>
                    <a href=""><button> Visit In Github <img src="/pics/upa.png" alt="up-Right-Arrow" /></button> </a>
                </div>
                <div id="reg">
                    <img src="/pics/meta.png" alt="meta" />
                    <h2>MetaXperts</h2>
                    <p>MetaXperts: Cutting-edge web solutions and expert digital strategies designed to elevate your online presence and drive business success.</p>
                    <a href="https://github.com/Hashim-28/project-2"><button> Visit In Github <img src="/pics/upa.png" alt="up-Right-Arrow" /></button> </a>
                </div>
                <div id="pay">
                    <img src="/pics/dice.png" alt="Dice-game" />
                    <h2>Dice Game</h2>
                    <p>Created an interactive dice game with React.js, featuring dynamic rolls and real-time score tracking for a fun user experience.</p>
                    <a href="https://github.com/Hashim-28/Project-3"><button> Visit In Github <img src="/pics/upa.png" alt="up-Right-Arrow" /></button> </a>
                </div>
            </div>
        </div>
    );
}
export default Project;