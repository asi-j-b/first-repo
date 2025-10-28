export async function index(req, res, next) {
    try {
        res.render('dashboard', { title: 'Dashboard' });
    } catch (error) {
        next(error);
    }
}