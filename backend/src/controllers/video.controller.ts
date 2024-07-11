import { RequestWithUser } from '@/interfaces/auth.interface';
import { VideoService } from '@/services/video.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';


export class VideoController {
    public video = Container.get(VideoService); 

    public async uploadVideo(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            if (req.files)
                res.send('uploaded and thumbnail video')
            else
                res.status(400).send('No files uploaded')
        } catch (error) {
            next(error);
        }
    }

    public async uploadThumbnail(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            if (req.files){
                res.send('uploaded and thumbnail video')
            }
            else
                res.status(400).send('No files uploaded')
        } catch (error) {
            next(error);
        }
    }

    public async createVideo(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
        try {
            const { thumbnail, title, description } = req.body;
            const userId = req.user.id;
            const createVideoData = await this.video.uploadVideo(thumbnail, userId, title, description);
            res.status(201).json({ data: createVideoData, message: 'uploadVideo' });
        } catch (error) {
            next(error);
        }
    } 

    public async likeVideo(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { videoId } = req.body;
            const updateLikeData = await this.video.updateLikeByOne(videoId);
            res.status(200).json({ data: updateLikeData, message: 'likeVideo' });
        } catch (error) {
            next(error);
        }
    }

}