import { Router } from 'express';

import { Routes } from '@interfaces/routes.interface';
import { VideoController } from '@/controllers/video.controller';
import { upload } from '@/middlewares/multer.middleware';


export class VideoRoute implements Routes {
    public path = '/api/video/';
    public router = Router();
    public video = new VideoController()
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
       this.router.post(`${this.path}upload`, upload.fields([{ name: 'image' }, { name: 'video' }]), this.video.uploadVideo) 
    }
}

