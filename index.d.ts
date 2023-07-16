export default function getVideoInfo(
    videoUrl: string,
    cookie?: string,
    useragent?: string
): Promise<VideoInfo>;

export interface VideoInfo {
    url: string;
    sd: string;
    hd: string;
    title: string;
    thumbnail: string;
}
