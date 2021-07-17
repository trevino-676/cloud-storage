import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', ({request, response}: {request: any; response: any}) => {
    response.body = {message: 'Hello world!!'};
    response.status = 200;
});

export default router;