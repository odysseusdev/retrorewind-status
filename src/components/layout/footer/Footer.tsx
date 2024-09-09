"use client";

import { APPSHELL_CONTAINER_SIZE, APPSHELL_FOOTER_HEIGHT, URL_EXTERNAL_GITHUB_APP } from "@/lib/constants";
import { Container, Group, Text, Transition } from "@mantine/core";
import { IconArrowUp, IconBrandGithub } from "@tabler/icons-react";

import { FooterIcon } from ".";
import useScrollToTop from "@/lib/hooks/useScrollToTop";

const Footer = () => {
	const { scroll, scrolling, scrollToTop } = useScrollToTop();

	const year: number = new Date().getFullYear();

	return (
		<Container size={APPSHELL_CONTAINER_SIZE}>
			<Group
				h={APPSHELL_FOOTER_HEIGHT}
				justify="space-between"
				align="center"
			>
				<Text
					size="xs"
					c="dimmed"
				>
					&copy; odysseus. · 2024{year !== 2024 && ` - ${year}`} · All rights reserved.
				</Text>
				<Group gap="xs">
					<Transition
						transition="slide-up"
						exitDuration={100}
						mounted={!scrolling && scroll.y > 0}
					>
						{transitionStyles => (
							<FooterIcon
								transitionStyles={transitionStyles}
								label="Back to top"
								icon={IconArrowUp}
								onClick={scrollToTop}
							/>
						)}
					</Transition>
					<FooterIcon
						label="GitHub"
						icon={IconBrandGithub}
						href={URL_EXTERNAL_GITHUB_APP}
					/>
				</Group>
			</Group>
		</Container>
	);
};

export default Footer;
