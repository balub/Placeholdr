type Meta = {
    componentId: string;
    data: any
}
export default class CreateWidgetDTO {
    meta: Meta[];
    projectId: string
}