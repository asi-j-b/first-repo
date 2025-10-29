export async function index(req, res, next) {
    try {
        res.render('index', { title: 'Index' });
    } catch (error) {
        next(error);
    }
}