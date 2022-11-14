const createCurtainsVariants = (): any => ({
    closed: {
        scale: 2.1,
        rotate: 30,

    },
    open: {
        scale: 2,
        rotate: 30
    }
})

const createLeftCurtainVariants = (): any => ({
    closed: {
        left: '-50%',

    },
    open: {
        left: "1%",
    }
})

const createRightCurtainVariants = (): any => ({
    closed: {
        right: '-50%',
    },
    open: {
        right: "1%",
    }
})

const createCurtainTransition = (): any => ({
    duration: .4,
    delay: 0,
    ease: "easeOut"
})

const createNavLinkVariants = (): any => ({
    closed: {
        opacity: 0,
        y: "130%",
        transition: {
            type: "spring",
            stiffness: 70,
            duration: .1
        }
    },
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            delay: .3,
            type: "spring",
            stiffness: 150
        }
    }
})

const createNavItemsVariants = (): any => ({
    closed: {
        transition: {
            duration: 0.1,
            staggerChildren: 0.08,
            staggerDirection: -0.5
        }
    },
    open: {
        transition: {
            staggerChildren: 6,
            staggerDirection: 1
        }
    }
})

export {
    createCurtainsVariants,
    createLeftCurtainVariants,
    createRightCurtainVariants,
    createCurtainTransition,
    createNavLinkVariants,
    createNavItemsVariants
}