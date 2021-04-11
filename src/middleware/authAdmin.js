export default function authAdmin({ next, router }) {
    if (!localStorage.getItem('tokenAdmin')) {
        return false;
    }
    return next();
}