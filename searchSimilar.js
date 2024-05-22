import similarData from './graph-similars.json';

export function getSimilar(id) {
    const dataSource = similarData.links.find(link => link.source === id);
    const dataTarget = similarData.links.find(link => link.target === id);
    if (!dataSource && !dataTarget)
    {
        return 'User is alone, similars not found';
    }
    return dataSource ? dataSource.similar : dataTarget.similar;
}