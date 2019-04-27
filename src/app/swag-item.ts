export interface SwagItem { description: string; name: string; }
export interface SwagItemId extends SwagItem { id: string; }
export class SwagItemMock implements SwagItem, SwagItemId {
    description: string
    name: string
    id: string
}
