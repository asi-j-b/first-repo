export async function index(req, res, next) {
    try {
        res.render('login', { title: 'Login' });
    } catch (error) {
        next(error);
    }
}