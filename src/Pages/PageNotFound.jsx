import Footer from '../Components/Footer';

function PageNotFound() {
    return (
        <>
        <div class="container error-box">
            <div class="row">
                <div class="col-md-12 mt-5">
                    <div class="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div class="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default PageNotFound;