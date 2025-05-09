// Adds unique IDs to  blocks and their inner blocks
import { v4 as uuid } from "uuid";

export const addUniqueIdsToBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignIds = (b) => {
        b.forEach((block) => {
            block.id = uuid();
            if (block.innerBlocks?.length) assignIds(block.innerBlocks);
        });
    };

    assignIds(blocks);
    return blocks;
};