<script type="text/babel">
    let rootNode= document.getElementById("root");
    ReactionDOM.createRoot(rootnode).render(
        <React.StrictNode>
            <Counter/>
        </React.StrictNode>
    );

    function Counter(){
        const [x, setX]=React.useState(0);
        const [y, setY]=React.useState(0);
        const [z, setZ]=React.useState(0);

        function xChange(e){
            setX(e.target.value);
        };
        function yChange(e){
            setY(e.target.value);
        };
        const add = ()=>{
            setZ(parseInt(x)+parseInt(y));
        };
        const sub = ()=>{
            setZ(parseInt(x)-parseInt(y));
        };
        return(
            <div>
                x : <input type="text" onChange={xChange}/> <br/>
                y : <input type="text" onChange={yChange}/> <br/>
                <h1>{z}</h1>
                <button type="button" onClick={add}> + </button>
                <button type="button" onClick={sub}> - </button>
            </div>
        ) 
    }
</script>
