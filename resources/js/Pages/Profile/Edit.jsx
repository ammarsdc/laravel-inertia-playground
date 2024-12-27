import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Link } from '@inertiajs/react'

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <section>
                            <header>
                                <h2 className="mb-3 text-lg font-medium text-gray-900">
                                    Nested
                                </h2>
                            </header>
                        </section>

                        <Link href="?nested=normal" only={['nested']}>Load</Link>
                        &nbsp;|&nbsp;
                        <Link href="?nested=dot" only={['nested.a']}>Load .</Link>
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <section>
                            <header>
                                <h2 className="mb-3 text-lg font-medium text-gray-900">
                                    Related fields
                                </h2>
                            </header>
                        </section>

                        <Link href="?arr1=1" only={['arr2']}>Array 1</Link>
                        &nbsp;|&nbsp;
                        <Link href="?arr1=2" only={['arr2']}>Array 2</Link>
                        &nbsp;|&nbsp;
                        <Link href="?arr1=3" only={['arr2']}>Array 3</Link>
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <section>
                            <header>
                                <h2 className="mb-3 text-lg font-medium text-gray-900">
                                    Inertia behaviour for <code>only</code> property
                                </h2>
                            </header>

                            <Link href="?test=true" only={['test']}>Show test</Link>
                            &nbsp;|&nbsp;
                            <Link href="?go=true" only={['go']}>Show go</Link>
                            &nbsp;|&nbsp;
                            <Link href="" except={['go']}>Hide go</Link>
                            &nbsp;|&nbsp;
                            <Link href="" except={['test']}>Hide test</Link>
                            &nbsp;|&nbsp;
                            <Link href="?filter=true" only={['asd']}>Link</Link>
                        </section>
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
