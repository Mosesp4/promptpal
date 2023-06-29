import Feed from '@components/Feed';


const home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Explore & Exchange  <br className="max-md:hidden"/> 
            <span className="orange_gradient text-center">AI-Generated  Prompts</span>
        
        </h1>
        <p className="desc text-center">
            Promptpal is an open-source AI prompting tool for modern world to discover, create
            and share creative prompts.
        </p>

    <Feed />
        
    </section>
  )
}

export default home;
