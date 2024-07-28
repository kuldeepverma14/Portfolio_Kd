import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='text-red-500' > <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                Page : {error.statusText || error.message}
            </p>
        </div>
    )
}

export default Error