export function popupItems(user) {
    return [
        {
            className: "popup__location",
            children: user.location,
        },
        {
            className: "popup__bio",
            children: user.bio,
        },
        {
            className: "popup__number__repos",
            children: ` Public repositories: ${user.public_repos}`,
        },
    ];
}
