import React from 'react'
import CardLayout from './CardLayout'
import {
    Text,
} from "native-base";

import UsersIcon from '../assets/icons/usersIcon.svg';

export default function InviteCard() {
    return (
        <CardLayout
            title="Invite a friend!"
            IconProp={UsersIcon}
            linkText="Start inviting friends!"
            linkColor="primary"
        >
            <Text lineHeight={27}>
                <Text color="success" bold>
                    Receive 50 products{' '}
                </Text>{' '}
                by inviting a friend who subscribes to a plan.
                Your friend will receive
                a 30% discount coupon valid for any plan.
            </Text>
        </CardLayout>
    )
}