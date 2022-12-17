type Props = {
    article: Article
}

function Article({article}: Props) {
  return (
    <article> 
        {article.image && (
            <img 
            src={article.image}
            alt={article.title}
            className='w-full h-56 object-cover rounded-t-lg shadow-md' />
        )}

        <div>
            <div>
                <h2>{article.title}</h2>

                <section>
                    <p>{article.description}</p>
                </section>
            </div>

        </div>

    </article>
  )
}

export default Article