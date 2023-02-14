import React from 'react'

function Index({products}) {
    return (
      <>
        {products.map((elem) => (
        <div class="card mb-4 box-shadow">
            <div class="card-header">        
                 <h4 class="my-0 font-weight-normal">{elem.type}</h4>
            </div>
             <div class="card-body">
                    <h1 class="card-title pricing-card-title">{elem.price }<small class="text-muted">/ rub</small></h1>
                <div class="mt-3 mb-4">{ elem.content}</div>
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary">{elem.text}</button>
            </div>
        </div>
      ))}
    </>
  )
}

export default Index