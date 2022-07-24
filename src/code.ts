import names from "./data/names"
import lastNames from "./data/lastNames"

const getRandom = (list: Array<String>) => {
    return list[Math.floor(Math.random() * list.length)]
}

const doMagic = async (node) => {
    await Promise.all(
        node.getRangeAllFontNames(0, node.characters.length)
        .map(figma.loadFontAsync)
    )

    const name = getRandom(names)
    const lastName = getRandom(lastNames)
    const fullName = `${name} ${lastName}`
    node.characters = fullName
}

;(async () => {
    for (const node of figma.currentPage.selection) {
        if (node.type === 'TEXT') {
            await doMagic(node)
        }
    }
    figma.closePlugin()
})()
