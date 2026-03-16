export default class HomePage extends React.Component<any, any> {
    render() {
        return (
            <OffcanvasContainer>
                <Section>
                    <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;">
                        <NavbarContainer>
                            <Navbar>
                                <ListItem>
                                    <Link toggleOptions="target: #menu;" href="#">
                                        <Icon options="menu" button />
                                    </Link>
                                </ListItem>
                            </Navbar>
                        </NavbarContainer>
                    </NavbarSticky>
                    <Offcanvas id="menu" options="overlay: true">
                        <List type="divider">
                            <ListItem>
                                <Link href="/">Home</Link>
                            </ListItem>
                        </List>
                    </Offcanvas>
                </Section>
            </OffcanvasContainer>
        )
    }
}